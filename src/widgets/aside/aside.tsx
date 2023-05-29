import { Link as ReachLink } from "react-router-dom"
import {
    Drawer, DrawerHeader, DrawerBody,
    DrawerContent, DrawerFooter, DrawerOverlay, DrawerCloseButton, Stack, Button, Center, Heading, Divider
} from "@chakra-ui/react"

import AccountAside from "./account-aside"

import { urls } from "../../shared/config"

export default function Aside({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="md">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                <DrawerBody>
                    <Center>
                        <Heading size="md" mb="4">Our Links</Heading>
                    </Center>
                    <Center>
                        <Stack spacing={5} w={"200px"} divider={<Divider variant="dashed" />}>
                            <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.home}>Home</Button>
                            <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.tourism}>Tourism</Button>
                            <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>About</Button>
                            <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.contacts}>Contacts</Button>
                        </Stack>
                    </Center>
                </DrawerBody>
                <DrawerFooter borderTopWidth='1px'>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )
}

Aside.AccoutAside = AccountAside
