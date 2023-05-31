import { Outlet } from "react-router-dom"
import { Box, useDisclosure } from "@chakra-ui/react"

import { Layout } from "../"

export default function MainLayout() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout>
            <Layout.Header onOpenAside={onOpen} />
            <Layout.Aside isOpen={isOpen} onClose={onClose} />
            <Layout.Content>
                <Box overflowY="auto" height="calc(100vh - 63px)" scrollBehavior={"smooth"}>
                    <Outlet />
                </Box>
            </Layout.Content>
        </Layout>
    )
}
