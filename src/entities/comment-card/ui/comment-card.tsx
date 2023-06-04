import { Card, CardBody, CardHeader, CardFooter, Flex, Box, Avatar, IconButton, Heading, Tooltip } from "@chakra-ui/react"

import { BsThreeDotsVertical } from "react-icons/bs"

export interface IComments {
    id: string
    name: string
    title: string
    text: string
}

export default function Commentard({ id, name, title, text }: IComments ) {
    return (
        <Card maxW="sm">
            <CardHeader>
                <Flex gap={4}>
                    <Flex flex='1' gap='4' alignItems='center' >
                        <Avatar name={name}/>

                        <Box>
                            <Heading size='sm'>{name}</Heading>
                            <Tooltip label={title}>
                                <Heading size='xs' noOfLines={1}>{title}</Heading>
                            </Tooltip>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Tooltip label={text}>
                    <Heading size='xs' noOfLines={4}>
                        {text}
                    </Heading>
                </Tooltip>
            </CardBody>
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
            </CardFooter>
        </Card>
    )
}
