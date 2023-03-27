import { Link as ReachLink } from "react-router-dom"
import { Box, VStack, Button, Heading, Divider } from "@chakra-ui/react"
import { ArrowLeftIcon, SettingsIcon } from "@chakra-ui/icons"

import { urls } from "../../shared/config"
import { useViewerAtom } from "../../entities/viewer/model"

export default function AccountAside() {
    const { authData: { data } } = useViewerAtom()

    return (
        <Box pos="sticky" top="0">
            <VStack padding="10px" spacing="10px" alignItems={"flex-start"}>
                <Heading size={"md"}>Hi, {data?.name}</Heading>
                <Divider />
                <Button as={ReachLink} to={urls.home} w="100%" leftIcon={<ArrowLeftIcon />}>Return to home page</Button>
                <Divider />
                <Heading size={"md"}>Set up's</Heading>
                <Divider />
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
            </VStack>
        </Box>
    )
}
