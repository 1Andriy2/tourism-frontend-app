import { FC, ReactNode } from "react"
import { Box } from "@chakra-ui/react"

import Container from "../container/ui"

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container margin={40}>
        {children}
    </Container>
  )
}

export default Content
