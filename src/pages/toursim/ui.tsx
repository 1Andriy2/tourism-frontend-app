import { Fragment } from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"

import pr1 from "../../shared/images/place1.jpg"
import pr2 from "../../shared/images/place2.jpg"

import { TourismCard } from "../../entities/tourism-card"

const dataPlaces = [
    {
        id: 1,
        preview: pr1,
        title: "Lviv",
        description: "Lorem ipsum dolor sit amet, consectetur adip",
    },
    {
        id: 2,
        preview: pr2,
        title: "Lviv38",
        description: "Lorem ipsum dolor sit amet, consectetur adip",
    },
    {
        id: 3,
        preview: pr1,
        title: "Lviv83",
        description: "Lorem ipsum dolor sit amet, consectetur adip",
    },
    {
        id: 4,
        preview: pr2,
        title: "Lviv34",
        description: "Lorem ipsum dolor sit amet, consectetur adip",
    }
]

export default function TourismPage() {
    return (
        <Box px={8}>
            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {dataPlaces.map(place => (
                    <TourismCard key={place.id} {...place} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
