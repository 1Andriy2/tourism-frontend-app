import { Fragment } from "react";
import { Link as ReachLink, useLocation } from "react-router-dom"
import { Avatar, HStack, Icon, Button, useMediaQuery } from "@chakra-ui/react"
import { AtSignIcon, SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

import { UseModel } from "..";
import UserPoppup from "./user-poppup";
import { urls } from "../../../shared/config";
import { useViewerAtom } from "../../../entities/viewer/model";

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
    console.log("🚀 ~ file: nav-list.tsx:32 ~ NavList ~ pathname:", pathname)
    const { isAuthenticated, authData } = useViewerAtom()

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
                    <UserPoppup>
                        <Avatar w={10} h={10} name={authData.data?.name} cursor="pointer" />
                    </UserPoppup>
                ) : (
                    <Fragment>
                        <Button as={ReachLink} variant="ghost" colorScheme="whatsapp" to={urls.auth + "/" + urls.logIn}>
                            LogIn
                        </Button>
                        <Button as={ReachLink} variant="ghost" colorScheme="whatsapp" to={urls.auth + "/" + urls.register}>
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
