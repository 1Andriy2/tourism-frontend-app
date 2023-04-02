import { Fragment } from "react"
import { animated } from '@react-spring/web'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Box, Button, Image, Heading, Highlight } from "@chakra-ui/react"

import nature1 from "../../shared/images/4kNature.jpg"
import nature2 from "../../shared/images/4kNature2.jpg"
import nature3 from "../../shared/images/4kNature3.jpg"
import nature4 from "../../shared/images/4kNature4.webp"

import { UseModel } from "../../features/nav-list"
import { useAnimateView } from '../../shared/hooks'

export default function HomePage() {
  // const [headerRef, headerSprings] = useAnimateView({ from: { opacity: 0, y: 100, }, to: { opacity: 1, y: 0, }, })

  const { isLight } = UseModel.useThemeMode()

  return (
    <Fragment>
      {/* <animated.div ref={headerRef} style={headerSprings}>
        <Box minHeight="calc(100vh - 123px)" display="flex" flexDirection="column" justifyContent="space-evenly">
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
      </animated.div> */}
      <Parallax pages={4} style={{ top: '0', maxWidth: 1160, margin: "0 auto" }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Box minHeight="calc(100vh - 123px)" px="10px" display="flex" flexDirection="column" justifyContent="space-evenly">
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
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}>
          <Image
            minH="100vh"
            w="100%"
            objectFit='cover'
            src={nature3}
            alt='Dan Abramov'
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.5}>
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
        </ParallaxLayer>


        <ParallaxLayer offset={1.5} speed={0.8} style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}>
          <Image
            minH="100vh"
            w="100%"
            objectFit='cover'
            src={nature4}
            alt='Dan Abramov'
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.5}>
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
        </ParallaxLayer>


        <ParallaxLayer offset={2.5} speed={0.8} style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}>
          <Image
            minH="100vh"
            w="100%"
            objectFit='cover'
            src={nature1}
            alt='Dan Abramov'
          />
        </ParallaxLayer>


        <ParallaxLayer offset={3} speed={0.5}>
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
        </ParallaxLayer>


        <ParallaxLayer offset={3} speed={0.8} style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}>
          <Image
            minH="100vh"
            w="100%"
            objectFit='cover'
            src={nature2}
            alt='Dan Abramov'
          />
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
}
