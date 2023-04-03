import { Fragment } from "react"
import { useQuery } from "react-query"
import {
    Flex, HStack, Button, Menu, MenuButton, MenuList, MenuItem,
    MenuOptionGroup, MenuItemOption, Input, InputGroup, InputRightElement, Heading, Tag, ScaleFade, Spinner, Center
} from "@chakra-ui/react"

import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"

import { getCoutries } from "../../../shared/api";
import { IFIlterData, IFIlterAction, FilterActionKind } from "../model/use-filters"

export interface ICoutries {
    id: string
    name: string
    place?: any
}

export default function TourismCategory({ filterData, changer }: { filterData: IFIlterData, changer: React.Dispatch<IFIlterAction> }) {
    const { data, isLoading } = useQuery<ICoutries[]>({ queryFn: async () => await getCoutries() })

    return (
        <Fragment>
            <Flex justifyContent="space-between">
                <Menu matchWidth>
                    <MenuButton w="250px" as={Button} rightIcon={<ChevronDownIcon />}>
                        Open filters
                    </MenuButton>
                    <MenuList>
                        <MenuOptionGroup defaultValue={filterData.sort} title='Type Sort' type='radio'>
                            <MenuItemOption value='asc' onClick={() => changer({ type: FilterActionKind.SetSort, payload: "asc" })}>Ascending</MenuItemOption>
                            <MenuItemOption value='desc' onClick={() => changer({ type: FilterActionKind.SetSort, payload: "desc" })}>Descending</MenuItemOption>
                        </MenuOptionGroup>
                        <MenuOptionGroup title='Cities' type='checkbox'>
                            {isLoading && <Center><Spinner /></Center>}
                            {!isLoading && data && data.map(({ id, name }) => (
                                <MenuItemOption
                                    key={id}
                                    value={name}
                                    onClick={() => changer({ type: FilterActionKind.AddCity, payload: { id, name } })}>
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

            <ScaleFade in={filterData.cities.length !== 0}>
                <HStack my={2}>
                    <Heading size="md" >
                        Choosen categories:
                    </Heading>
                    {filterData.cities.map(({ id, name }) => (
                        <Tag colorScheme="whatsapp" key={id} size="lg">
                            {name}
                        </Tag>
                    ))}
                </HStack>
            </ScaleFade>
        </Fragment>
    )
}
