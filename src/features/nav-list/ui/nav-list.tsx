import { Fragment } from "react";
import { Link as ReachLink } from "react-router-dom"
import { HStack, Icon, Button, useMediaQuery } from "@chakra-ui/react"
import { AtSignIcon, SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

import { UseModel } from "..";
import { useViewerAtom } from "../../../entities/viewer/model";
import { urls } from "../../../shared/config";
import useLogOutMutate from "../../auth/model/use-logout-mutate";

export default function NavList({ onOpenAside }: { onOpenAside: () => void }) {
    const { isAuthenticated } = useViewerAtom()
    const { mutate } = useLogOutMutate()

    const [isLargerThan800] = useMediaQuery("(max-width:950px)")
    const { isLight, toggleColorMode } = UseModel.useThemeMode()

    return (
        <Fragment>
            <HStack spacing={50}>
                <Icon as={AtSignIcon} height={43} width={43} color="whatsapp.400" />
                <HStack spacing={5} display={isLargerThan800 ? "none" : "flex"}>
                    <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.home}>Home</Button>
                    <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>Tourism</Button>
                    <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>About</Button>
                    <Button as={ReachLink} variant="outline" colorScheme="whatsapp" to={urls.about}>Contacts</Button>
                </HStack>
            </HStack>
            <HStack spacing={isLargerThan800 ? 2 : 5}>
                {isAuthenticated ? (
                    <Fragment>
                        <Button variant="ghost" colorScheme="whatsapp" onClick={() => mutate()}>
                            LogOut
                        </Button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Button as={ReachLink} variant="ghost" colorScheme="whatsapp" to={urls.logIn}>
                            LogIn
                        </Button>
                        <Button as={ReachLink} variant="ghost" colorScheme="whatsapp" to={urls.register}>
                            Register
                        </Button>
                    </Fragment>
                )}
                <Button variant={"unstyled"} onClick={toggleColorMode}>
                    <Icon as={isLight ? SunIcon : MoonIcon} height={18} width={18} color="whatsapp.400" />
                </Button>
                <Button variant={"unstyled"} onClick={onOpenAside} display={isLargerThan800 ? "block" : "none"}>
                    <Icon as={HamburgerIcon} height={18} width={18} color="whatsapp.400" />
                </Button>
            </HStack>
        </Fragment>
    )
}
