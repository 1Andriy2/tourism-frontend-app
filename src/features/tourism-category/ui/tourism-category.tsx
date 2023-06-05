import { Fragment } from "react";
import { useQuery } from "react-query";
import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Tag,
  ScaleFade,
  Spinner,
  Center,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";

import { IoMdCheckmark } from "react-icons/io";
import { SearchIcon, ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons";

import { getCoutries } from "../../../shared/api";
import {
  IFIlterData,
  IFIlterAction,
  FilterActionKind,
} from "../model/use-filters";

export interface ICoutries {
  id: string;
  name: string;
  place?: any;
}

export default function TourismCategory({
  filterData,
  changer,
}: {
  filterData: IFIlterData;
  changer: React.Dispatch<IFIlterAction>;
}) {
  const { data, isLoading } = useQuery<ICoutries[]>({
    queryKey: ["countries", filterData],
    queryFn: getCoutries,
  });
  const [isLargerThan600] = useMediaQuery("(max-width:600px)");
  return (
    <Fragment>
      <Flex justifyContent={isLargerThan600 ? "center" : "space-between"} flexWrap="wrap" gap={"10px"}>
        <Menu matchWidth>
          <MenuButton w="250px" as={Button} rightIcon={<ChevronDownIcon />}>
            Open filters
          </MenuButton>
          <MenuList>
            <MenuOptionGroup
              defaultValue={filterData.sort}
              title="Type Sort"
              type="radio"
            >
              <MenuItemOption
                value="asc"
                onClick={() =>
                  changer({ type: FilterActionKind.SetSort, payload: "asc" })
                }
              >
                Ascending
              </MenuItemOption>
              <MenuItemOption
                value="desc"
                onClick={() =>
                  changer({ type: FilterActionKind.SetSort, payload: "desc" })
                }
              >
                Descending
              </MenuItemOption>
            </MenuOptionGroup>
            <MenuOptionGroup title="Countries" type="checkbox">
              {isLoading && (
                <Center>
                  <Spinner />
                </Center>
              )}
              {!isLoading &&
                data &&
                data.map(({ id, name }) => (
                  <Box
                    key={id}
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    p="6px 12px"
                    cursor="pointer"
                    _hover={{ bg: "whiteAlpha.200" }}
                    onClick={() => {
                      changer({
                        type: FilterActionKind.AddCity,
                        payload: { id, name },
                      });
                    }}
                  >
                    <div style={{ width: 10, height: 10, marginRight: 15 }}>
                      {filterData.cities.find((ct) => ct.id === id) && (
                        <IoMdCheckmark />
                      )}
                    </div>
                    <p>{name}</p>
                  </Box>
                ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <InputGroup maxW={250}>
          <InputRightElement children={<SearchIcon />} />
          <Input
            value={filterData.search}
            onChange={(e) =>
              changer({
                type: FilterActionKind.SetSearch,
                payload: e.target.value,
              })
            }
            placeholder="Search your favorite place"
          />
        </InputGroup>
      </Flex>

      <ScaleFade in={filterData.cities.length !== 0}>
        <HStack my={2}>
          <Heading size="md">Choosen categories:</Heading>
          {filterData.cities.map(({ id, name }) => (
            <Tag colorScheme="whatsapp" gap={5} key={id} size="lg">
              <p>{name}</p>
              <IconButton
                w={8}
                h={8}
                bg={"transparent"}
                icon={<SmallCloseIcon />}
                onClick={() => {
                  changer({
                    type: FilterActionKind.AddCity,
                    payload: { id, name },
                  });
                }}
                aria-label={`Clear filter category ${name}`}
              />
            </Tag>
          ))}
        </HStack>
      </ScaleFade>
    </Fragment>
  );
}
