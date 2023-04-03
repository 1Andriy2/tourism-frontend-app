import { Fragment } from "react";
import { useQuery } from "react-query";
import {
    Flex, HStack, Button, Menu, MenuButton, MenuList, MenuItem,
    MenuOptionGroup, MenuItemOption, Input, InputGroup, InputRightElement, Heading, Tag, ScaleFade, Spinner, Center
} from "@chakra-ui/react";

import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"

import { getCoutries } from "../../../shared/api";
import useFilters, { FilterActionKind } from "../model/use-filters";

const exampleCitiesData = [
    {
        id: 1,
        name: "Lviv"
    },
    {
        id: 2,
        name: "Kyiv"
    },
    {
        id: 3,
        name: "Madrid"
    },
    {
        id: 4,
        name: "Barcelona"
    }
]

export default function TourismCategory() {
    const {data, isLoading} = useQuery({queryFn:async () => await getCoutries()})
    const [state, dispatch] = useFilters()

    return (
        <Fragment>
            <Flex justifyContent="space-between">
                <Menu matchWidth>
                    <MenuButton w="250px" as={Button} rightIcon={<ChevronDownIcon />}>
                        Open filters
                    </MenuButton>
                    <MenuList>
                        <MenuOptionGroup defaultValue={state.sort} title='Type Sort' type='radio'>
                            <MenuItemOption value='asc' onClick={() => dispatch({ type: FilterActionKind.SetSort, payload: "asc" })}>Ascending</MenuItemOption>
                            <MenuItemOption value='desc' onClick={() => dispatch({ type: FilterActionKind.SetSort, payload: "desc" })}>Descending</MenuItemOption>
                        </MenuOptionGroup>
                        <MenuOptionGroup title='Cities' type='checkbox'>
                            {isLoading && <Center><Spinner/></Center>}
                            {!isLoading && data && data.map(({ name }) => (
                                <MenuItemOption
                                    key={name}
                                    value={name}
                                    onClick={() => dispatch({ type: FilterActionKind.AddCity, payload: name })}>
                                    {name}
                                </MenuItemOption>
                            ))}
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>

                <InputGroup maxW={250}>
                    <InputRightElement children={<SearchIcon />} />
                    <Input
                        placeholder="Search your favorite place"
                    />
                </InputGroup>
            </Flex>

            <ScaleFade in={state.cities.length !== 0}>
                <HStack my={2}>
                    <Heading size="md" >
                        Choosen categories:
                    </Heading>
                    {state.cities.map(name => (
                        <Tag colorScheme="whatsapp" key={name} size="lg">
                            {name}
                        </Tag>
                    ))}
                </HStack>
            </ScaleFade>
        </Fragment>
    )
}
