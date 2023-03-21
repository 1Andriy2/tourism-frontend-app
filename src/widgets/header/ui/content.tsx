import { FC, ReactNode } from "react"
import { Flex } from "@chakra-ui/react"

const Content: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            {children}
        </Flex>
    )
  }
  
export default Content
  