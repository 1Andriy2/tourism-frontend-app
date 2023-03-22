import { FC, ReactNode } from "react"
import { Box } from "@chakra-ui/react"

import Container from "../container/ui"

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container margin="123px">
      {children}
    </Container>
  )
}

export default Content
