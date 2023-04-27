import { Card, CardBody, CardHeader, CardFooter, Image, Button, Flex, Box, Avatar, IconButton, Text, Heading } from "@chakra-ui/react"

import { BsThreeDotsVertical } from "react-icons/bs"

export default function Commentard({ number }: { number: number }) {
    return (
        <Card maxW="sm">
            <CardHeader>
                <Flex gap={4}>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Heading size='sm'>Segun Adebayo {number}</Heading>
                            <Text>Creator, Chakra UI</Text>
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
                <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
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
