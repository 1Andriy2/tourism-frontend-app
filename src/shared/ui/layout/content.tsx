import { useMediaQuery } from "@chakra-ui/react";
import { FC, ReactNode } from "react"
import Container from "../container/ui"

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLargerThan950] = useMediaQuery("(max-width:950px)");

  return (
    <Container margin={isLargerThan950 ? "53px" : "63px"}>
      {children}
    </Container>
  )
}

export default Content
