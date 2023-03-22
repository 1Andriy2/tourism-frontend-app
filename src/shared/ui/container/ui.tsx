import { ReactNode } from 'react'
import { Box } from "@chakra-ui/react"

const Container = ({ children, margin = 0 }: { children: ReactNode, margin?: number | string }) => {
  return (
    <Box maxWidth={1000} marginTop={margin} mx="auto">
      {children}
    </Box>
  )
}

export default Container
