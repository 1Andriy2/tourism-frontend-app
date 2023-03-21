import { Outlet } from "react-router-dom"
import { useDisclosure } from "@chakra-ui/react"

import { Layout } from "../"

export default function MainLayout() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout>
            <Layout.Header onOpenAside={onOpen} />
            <Layout.Aside isOpen={isOpen} onClose={onClose} />
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    )
}
