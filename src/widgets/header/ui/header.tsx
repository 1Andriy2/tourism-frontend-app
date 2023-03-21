import { Box } from "@chakra-ui/react"

import Content from "./content"
import { NavList } from "../../../features"
import { Container } from "../../../shared/ui"

export default function Header() {
  return (
    <Box position="fixed" insetX="0" top="0" p="10">
        <Container>
            <Header.Content>
                <NavList />
            </Header.Content>
        </Container>
    </Box>
  )
}

Header.Content = Content
