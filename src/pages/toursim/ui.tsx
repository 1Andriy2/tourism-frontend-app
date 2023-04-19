import { useEffect, Fragment, forwardRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "@react-spring/web"
import { Box, Center, Divider, SimpleGrid, Spinner } from "@chakra-ui/react"

import { TourismCategory } from "../../features"
import { useViewerAtom } from "../../entities/viewer/model"
import usePaginateQuery from "../../shared/hooks/use-paginate-query"
import useFilters from "../../features/tourism-category/model/use-filters"
import TourismCard from "../../entities/tourism-card/ui/tourism-card"

const MotionTourismCard = motion(forwardRef(TourismCard))

const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

export default function TourismPage() {
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

    useEffect(() => {
        if (refScrollBtn.current === null) return

        if (isBottom && hasNextPage) {
            fetchNextPage()
        }
    }, [refScrollBtn, isBottom, hasNextPage])

    return (
        <Box px={8}>
            <TourismCategory filterData={state} changer={dispatch} />
            <Divider my={5} height={5} />
            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {isLoading && <Spinner />}
                {!isLoading && data?.pages && data.pages.map((page, i) => (
                    <Fragment key={i}>
                        {page.data.map(place => (
                            <MotionTourismCard
                                key={place.title}
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                user={user}
                                place={place}
                            />
                        ))}
                    </Fragment>
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
