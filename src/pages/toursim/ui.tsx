import { useEffect, Fragment, forwardRef, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useInView } from "@react-spring/web"
import { Box, Center, Divider, SimpleGrid, Spinner, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@chakra-ui/react"

import { TourismCategory } from "../../features"
import { RentForm } from "../../features/tourism"
import { useViewerAtom } from "../../entities/viewer/model"
import usePaginateQuery from "../../shared/hooks/use-paginate-query"
import useFilters from "../../features/tourism-category/model/use-filters"
import TourismCard, { IToursimPlacesCollection } from "../../entities/tourism-card/ui/tourism-card"

const MotionTourismCard = motion(forwardRef(TourismCard))

const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

export default function TourismPage() {
    const [activeTourism, setActiveTourism] = useState<IToursimPlacesCollection | null>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { authData: { data: user } } = useViewerAtom()
    const [refScrollBtn, isBottom] = useInView()
    const [state, dispatch] = useFilters()
    const {
        data,
        isLoading,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage } = usePaginateQuery(state)

    const result: IToursimPlacesCollection[] = useMemo(() => {
        const response: any[] = []
        response.push(data?.pages.flatMap(({ data }) => data))
        return response[0]?.sort((a: IToursimPlacesCollection, b: IToursimPlacesCollection) => {
            switch (state.sort) {
                case "asc":
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    return 0;
                case "desc":
                    if (a.title < b.title) {
                        return 1;
                    }
                    if (a.title > b.title) {
                        return -1;
                    }
                    return 0;
                default:
                    break;
            }
        }) || []
    }, [data, state.sort])

    useEffect(() => {
        if (refScrollBtn.current === null) return

        if (isBottom && hasNextPage) {
            fetchNextPage()
        }
    }, [refScrollBtn, isBottom, hasNextPage])

    function onOpenRentModal(tourism: IToursimPlacesCollection): void {
        onOpen()
        setActiveTourism(tourism)
    }

    return (
        <Box px={8}>
            <TourismCategory filterData={state} changer={dispatch} />
            <Divider my={5} height={5} />

            <Modal isOpen={isOpen && activeTourism !== null} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Rent: "{activeTourism?.title}";</ModalHeader>
                    <ModalBody>
                        {activeTourism && <RentForm tourism={activeTourism} />}
                    </ModalBody>
                </ModalContent>
            </Modal>

            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {isLoading && <Spinner />}
                {!isLoading && result && result.map(place => (
                    <MotionTourismCard
                        key={place.title}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        user={user}
                        place={place}
                        onOpenRentModal={onOpenRentModal}
                    />
                ))}
            </SimpleGrid>
            {isFetchingNextPage && <Center><Spinner /></Center>}
            <button
                ref={refScrollBtn}
                style={{ visibility: "hidden", padding: "10px" }}
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage} />
        </Box>
    )
}
