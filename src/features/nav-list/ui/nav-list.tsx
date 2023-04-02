import { Fragment } from "react";
import { Link as ReachLink, useMatch, useLocation } from "react-router-dom"
import { HStack, Icon, Button, useMediaQuery } from "@chakra-ui/react"
import { AtSignIcon, SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

import { UseModel } from "..";
import { useViewerAtom } from "../../../entities/viewer/model";
import { urls } from "../../../shared/config";
import useLogOutMutate from "../../auth/model/use-logout-mutate";

const navLinks = [
    {
        path: urls.home,
        label: "Home",
    },
    {
        path: urls.tourism,
        label: "Tourism",
    },
    {
        path: urls.about,
        label: "About",
    },
    {
        path: "urls.about",
        label: "Contacts",
    },
]

export default function NavList({ onOpenAside }: { onOpenAside: () => void }) {
    const pathname = useLocation().pathname
    const { isAuthenticated } = useViewerAtom()
    const { mutate } = useLogOutMutate()

    const [isLargerThan800] = useMediaQuery("(max-width:950px)")
    const { isLight, toggleColorMode } = UseModel.useThemeMode()

    return (
        <Fragment>
            <HStack spacing={50}>
                <Icon as={AtSignIcon} height={43} width={43} color="whatsapp.400" />
                <HStack spacing={5} display={isLargerThan800 ? "none" : "flex"}>
                    {navLinks.map(({ path, label }) => (
                        <Button key={path} as={ReachLink} variant={path === pathname ? "solid" : "outline"} colorScheme="whatsapp" to={path}>{label}</Button>
                    ))}
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
