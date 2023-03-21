import { FC, ReactElement } from "react"
import { theme as defaultTheme, ChakraProvider, extendTheme, type ThemeConfig, Button } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'light'
}

const theme = extendTheme({ 
    ...defaultTheme,
    ...config,
})

const withChakraUi: (Component: FC<any | undefined>) => (args: any) => ReactElement<any, any> = (Component) => (props) => (
    <ChakraProvider theme={theme}>
      <Component {...props} />
    </ChakraProvider>
  )
  
export default withChakraUi