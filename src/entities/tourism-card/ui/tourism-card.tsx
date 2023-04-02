import {
    Box, Card, CardHeader, CardBody, CardFooter, Heading, Center, Image,
    Divider, Accordion, AccordionItem, AccordionPanel, AccordionButton, HStack, IconButton
} from "@chakra-ui/react"

import styles from "./tourism-card.module.css"

import { StarIcon, InfoIcon } from "@chakra-ui/icons"

export default function TourismCard({ id, preview, title, description }
    : { id: number, preview: string, title: string, description: string }) {
    return (
        <Card>
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
                </Box>
            </CardBody>
            <CardFooter justifyContent="space-evenly">
                <IconButton icon={<StarIcon />} aria-label={"FollowMe"} />
                <IconButton icon={<InfoIcon />} aria-label={"FollowMe"} />
            </CardFooter>
        </Card>
    )
}
