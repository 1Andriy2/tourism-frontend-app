import { Fragment } from "react"
import { SplideSlide } from "@splidejs/react-splide"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Box, Button, Image, Heading, Highlight, SimpleGrid, Center, useMediaQuery } from "@chakra-ui/react"

import nature1 from "../../shared/images/4kNature.jpg"
import nature2 from "../../shared/images/4kNature2.jpg"
import nature3 from "../../shared/images/4kNature3.jpg"

import { CommentCard } from "../../entities"
import { SimpleSplide } from "../../features"
import { UseModel } from "../../features/nav-list"

export default function HomePage() {
  // const [headerRef, headerSprings] = useAnimateView({ from: { opacity: 0, y: 100, }, to: { opacity: 1, y: 0, }, })

  const { isLight } = UseModel.useThemeMode()
  const [isLargerThan950] = useMediaQuery("(max-width:950px)")

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

        <ParallaxLayer offset={1} speed={0.5}>
          <Heading mb={4}><Center>Top comments</Center></Heading>
          <SimpleSplide options={{ type: "loop", autoplay: true, gap: 10, perPage: 1, focus: "center" }}>
            {[3, 8].map(key => (
              <SplideSlide style={{ display: "flex", justifyContent: "center" }} key={key}>
                {!isLargerThan950 ? (
                  <SimpleGrid columns={[3]} gap={4}>
                    {[1, 2, 3, 4, 5, 6].map(key => (
                      <CommentCard key={key} number={key} />
                    ))}
                  </SimpleGrid>
                ) : (
                  <CommentCard number={key} />
                )}
              </SplideSlide>
            ))}
          </SimpleSplide>
        </ParallaxLayer>


        {/* <ParallaxLayer offset={1.5} speed={0.8} style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}>
          <Image
            minH="100vh"
            w="100%"
            objectFit='cover'
            src={nature4}
            alt='Dan Abramov'
          />
        </ParallaxLayer> */}

        <ParallaxLayer offset={2} speed={0.5}>
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
