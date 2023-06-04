import { Box, useMediaQuery } from "@chakra-ui/react"

import Content from "./content"
import { NavList } from "../../../features"
import { Container } from "../../../shared/ui"

export default function Header(props: { onOpenAside: () => void }) {
  const [isLargerThan950] = useMediaQuery("(max-width:950px)")

  return (
    <Box position="fixed" insetX="0" top="0" zIndex="43" p={isLargerThan950 ? "5px" : "10px"} bgColor="whiteAlpha.400">
      <Container>
        <Header.Content>
          <NavList {...props} />
        </Header.Content>
      </Container>
    </Box>
  )
}

Header.Content = Content
