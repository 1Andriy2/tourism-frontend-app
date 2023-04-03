import {
    Box, Card, CardHeader, CardBody, CardFooter, Heading, Center, Image,
    Divider, Accordion, AccordionItem, AccordionPanel, AccordionButton, HStack, IconButton, Tag, TagLabel, Tooltip
} from "@chakra-ui/react"

import styles from "./tourism-card.module.css"

import { StarIcon, InfoIcon } from "@chakra-ui/icons"

export interface IToursimPlacesCollection {
    title: string
    preview: string
    description: string
}

export default function TourismCard({ preview, title, description }: IToursimPlacesCollection) {
    return (
        <Card position="relative" variant="filled">
            <CardHeader>
                <Center>
                    <Heading size="lg">
                        {title}
                    </Heading>
                </Center>
            </CardHeader>
            <CardBody overflow="hidden">
                <Box>
                    <Image className={styles.image_preview} minH="200px" maxH="200px" h="100%" w="100%" objectFit="cover" borderRadius="8px" src={preview} />
                    <Divider my={5} />
                    <Accordion allowMultiple>
                        <AccordionItem>
                            <AccordionButton>
                                <Heading size="md">
                                    {title} (more)
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {description}
                            </AccordionPanel>
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
                    <IconButton colorScheme="red" variant="outline" icon={<StarIcon />} aria-label={"FollowMe"} />
                </Tooltip>
                <Tooltip label="Info">
                    <IconButton colorScheme="red" variant="outline" icon={<InfoIcon />} aria-label={"FollowMe"} />
                </Tooltip>
            </CardFooter>
        </Card>
    )
}
