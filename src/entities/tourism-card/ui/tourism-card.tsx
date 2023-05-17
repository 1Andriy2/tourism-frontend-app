import { LegacyRef, ForwardRefRenderFunction } from "react"
import { useMutation } from "react-query"
import {
    Box, Card, CardHeader, CardBody, CardFooter, Heading, Center, Image,
    Divider, Accordion, AccordionItem, AccordionPanel, AccordionButton, IconButton, Tag, TagLabel, Tooltip
} from "@chakra-ui/react"

import { StarIcon, InfoIcon } from "@chakra-ui/icons"

import styles from "./tourism-card.module.css"

import { IUserData } from "../../viewer/store"
import { markPlace } from "../../../shared/api"
import { useToastView } from "../../../shared/hooks"
import { queryClient } from "../../../app/providers/with-react-query/withReactQuery"

export interface IToursimPlacesCollection {
    id?: string
    title: string
    preview: string
    description: string
}

export interface IToursimPlacesCard {
    user: IUserData | null, place: IToursimPlacesCollection, onOpenRentModal: (tourism: IToursimPlacesCollection) => void
}


const TourismCard: ForwardRefRenderFunction<unknown, IToursimPlacesCard> =
    ({ user, place: { id, preview, title, description }, onOpenRentModal }, ref: LegacyRef<any> | undefined) => {
        const toast = useToastView()
        const { mutate, isLoading } = useMutation(
            ["markPlace"],
            async () => await markPlace(title, user),
            {
                onSuccess: () => {
                    toast({ title: "Change Marked place" })
                    queryClient.invalidateQueries("GetViewer")
                }
            })

        return (
            <Card ref={ref} position="relative" variant="filled">
                <CardHeader>
                    <Center>
                        <Tooltip label={title}>
                            <Heading size="lg" noOfLines={1}>
                                {title}
                            </Heading>
                        </Tooltip>
                    </Center>
                </CardHeader>
                <CardBody overflow="hidden">
                    <Box>
                        <Image
                            className={styles.image_preview}
                            minH="200px"
                            maxH="200px"
                            h="100%"
                            w="100%"
                            objectFit="cover"
                            borderRadius="8px"
                            src={preview}
                        />
                        <Divider my={5} />
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <AccordionButton>
                                    <Heading size="md">
                                        {title} (more)
                                    </Heading>
                                </AccordionButton>
                                <Tooltip label={description}>
                                    <AccordionPanel noOfLines={2}>
                                        {description}
                                    </AccordionPanel>
                                </Tooltip>
                            </AccordionItem>
                        </Accordion>

                        <Box position="absolute" top="8px" right="8px">
                            <Tag colorScheme="red">
                                <TagLabel>Lviv</TagLabel>
                            </Tag>
                        </Box>
                    </Box>
                </CardBody>
                <CardFooter justifyContent="space-evenly">
                    <Tooltip label="Mark">
                        <IconButton
                            isLoading={isLoading}
                            isDisabled={user === null}
                            colorScheme="red"
                            variant={user?.places.includes(title) ? "solid" : "outline"}
                            icon={<StarIcon />}
                            aria-label={"FollowMe"}
                            onClick={() => mutate()}
                        />
                    </Tooltip>
                    <Tooltip label="Rent">
                        <IconButton
                            colorScheme="red"
                            variant="outline"
                            icon={<InfoIcon />}
                            aria-label={"Rent"}
                            onClick={() => onOpenRentModal({ id, preview, title, description })}
                        />
                    </Tooltip>
                </CardFooter>
            </Card>
        )
    }

export default TourismCard