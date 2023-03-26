import { Link as ReachLink } from "react-router-dom"
import { Box, VStack, Button } from "@chakra-ui/react"
import { SettingsIcon } from "@chakra-ui/icons"

import { urls } from "../../shared/config"

export default function AccountAside() {
    return (
        <Box pos="sticky" top="0">
            <VStack padding="10px" spacing="10px">
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
                <Button as={ReachLink} to={urls.profile} w="100%" leftIcon={<SettingsIcon />}>Profile</Button>
            </VStack>
        </Box>
    )
}
