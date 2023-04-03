import {
    Flex, HStack, Button, Menu, MenuButton, MenuList, MenuItem,
    MenuOptionGroup, MenuItemOption, Input, InputGroup, InputRightElement, Heading, Tag, ScaleFade
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"

import useFilters, { FilterActionKind } from "../model/use-filters";
import { Fragment } from "react";

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
                            {exampleCitiesData.map(({ id, name }) => (
                                <MenuItemOption
                                    key={id}
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
