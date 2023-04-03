import { Fragment } from "react"
import { useQuery } from "react-query";
import { Box, Divider, SimpleGrid, Spinner } from "@chakra-ui/react"

import pr1 from "../../shared/images/place1.jpg"
import pr2 from "../../shared/images/place2.jpg"

import { TourismCard } from "../../entities"
import { TourismCategory } from "../../features"
import { getTouristPlaces } from "../../shared/api";
import useFilters from "../../features/tourism-category/model/use-filters";

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
    const [state, dispatch] = useFilters()
    const { data, isLoading } = useQuery(['tourism-places', state], async () => getTouristPlaces(state))

    return (
        <Box px={8}>
            <TourismCategory filterData={state} changer={dispatch} />
            <Divider my={5} height={5} />
            <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                {isLoading && <Spinner />}
                {!isLoading && data && data.map(place => (
                    <TourismCard key={place.title} {...place} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
