import { Fragment } from "react";
import { Link as ReachLink } from "react-router-dom"
import { HStack, Icon, Button } from "@chakra-ui/react"
import { AtSignIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'

import { UseModel } from "..";
import { urls } from "../../../shared/config";

export default function NavList() {
    const { isLight, toggleColorMode } = UseModel.useThemeMode()

    return (
        <Fragment>
            <HStack spacing={50}>
                    <Icon as={AtSignIcon} height={43} width={43} color="whatsapp.400" />
                    <HStack spacing={5}>
                        <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.home}>Home</Button>
                        <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>Tourism</Button>
                        <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>About</Button>
                        <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>Contacts</Button>
                    </HStack>
                </HStack>
                <HStack spacing={5}>
                     <Button as={ReachLink} variant="ghost" colorScheme="whatsapp" to={urls.logIn}>
                        LogIn
                     </Button>
                     <Button as={ReachLink} variant="ghost" colorScheme="whatsapp" to={urls.register}>
                        Register
                     </Button>
                     <Button variant={"unstyled"} onClick={toggleColorMode}>
                         <Icon as={isLight ? SunIcon : MoonIcon} height={18} width={18} color="whatsapp.400" />
                    </Button>
                </HStack> 
        </Fragment>
 )
}
