import { animated } from '@react-spring/web'
import { Box, Button, Heading, Highlight } from "@chakra-ui/react"

import { UseModel } from "../../features/nav-list"
import { useAnimateView } from '../../shared/hooks'

export default function HomePage() {
  const [headerRef, headerSprings] = useAnimateView({ from: { opacity: 0, y: 100, }, to: { opacity: 1, y: 0, }, })

  const { isLight } = UseModel.useThemeMode()

  return (
    <animated.div ref={headerRef} style={headerSprings}>
      <Box minHeight="calc(100vh - 263px)" display="flex" flexDirection="column" justifyContent="space-evenly">
        <Heading size="3xl">
          Tourism
        </Heading>
        <Heading size="lg" fontWeight="normal" lineHeight="50px">
          <Highlight
            query={["dolor", "natus", "libero"]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "whatsapp.400", color: isLight ? "white" : "black" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ratione sapiente alias tempore recusandae libero, dolorem inventore
            enim labore perspiciatis. Ea reprehenderit fuga accusantium natus ab
            aspernatur cum. Impedit, minus?
          </Highlight>
        </Heading>
        <Button variant="outline" colorScheme="whatsapp" borderRadius="20px" size="lg">
          Get tourism
        </Button>
      </Box>
    </animated.div>
  );
}
