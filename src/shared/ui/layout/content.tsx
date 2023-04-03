import { FC, ReactNode } from "react"
import Container from "../container/ui"

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container margin="63px">
      {children}
    </Container>
  )
}

export default Content
