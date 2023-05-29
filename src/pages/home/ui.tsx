import { useMemo, Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link as ReachLink, useLocation } from "react-router-dom"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Box,
  Button,
  Image,
  Heading,
  Highlight,
  SimpleGrid,
  Spinner,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useQuery } from "react-query"


import nature1 from "../../shared/images/4kNature.jpg";
import nature2 from "../../shared/images/4kNature2.jpg";
import nature3 from "../../shared/images/4kNature3.jpg";

import { urls } from "../../shared/config";
import { CommentCard } from "../../entities";
import { SimpleSplide } from "../../features";
import { UseModel } from "../../features/nav-list";
import { IComments } from "../../entities/comment-card/ui/comment-card";
import { getComments } from "../../shared/api";

export default function HomePage() {
  // const [headerRef, headerSprings] = useAnimateView({ from: { opacity: 0, y: 100, }, to: { opacity: 1, y: 0, }, })

  const { isLight } = UseModel.useThemeMode();
  const [isLargerThan950] = useMediaQuery("(max-width:950px)");
  const { data, isLoading } = useQuery<IComments[]>({ queryKey: ["countries"], queryFn: getComments })
  const transformData = useMemo(() => {
    if(!data)
      return []
    const arr: any[] = []
    const startSlice = 6
    data.reduce(
      (prev: any[], currentValue) => {
        if (prev.length === startSlice) {
          arr.push(prev);
          prev = [];
        }
        prev.push(currentValue);
        if (data.indexOf(currentValue) === data.length - 1 && prev.length > 0) {
          arr.push(prev);
        }
        return prev;
      }, []);
    return isLargerThan950 ? data : arr as IComments[][]
  }, [data, isLargerThan950])
  console.log(transformData)

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
      <Parallax
        pages={4}
        style={{ top: "0", maxWidth: 1160, margin: "0 auto" }}
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <Box
            minHeight="calc(100vh - 123px)"
            px="10px"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Heading size="3xl">TravelTours</Heading>
            <Heading size="lg" fontWeight="normal" lineHeight="50px">
              <Highlight
                query={["adventure", "horizons", "dreams", "world"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "whatsapp.400",
                  color: isLight ? "white" : "black",
                }}
              >
                TravelTours is your guide to the world of adventure! Open new
                horizons with our tour recommendations. Immerse yourself in
                exciting journeys, discover the beauty of the world and get to
                know the diversity of cultures. We create unforgettable
                impressions and help turn your dreams into reality. Trust us
                with your next adventure!
              </Highlight>
            </Heading>
            <Button
              as={ReachLink}
              variant="outline"
              colorScheme="whatsapp"
              borderRadius="20px"
              size="lg"
              to={urls.tourism}
            >
              Get tourism
            </Button>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}
        >
          <Image
            minH="100vh"
            w="100%"
            objectFit="cover"
            src={nature3}
            alt="Dan Abramov"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Heading mb={4}>
            <Center>Top comments</Center>
          </Heading>
          <SimpleSplide
            options={{
              type: "loop",
              autoplay: true,
              start: 2,
              speed: 1000,
              rewindSpeed: 1000,
              gap: 10,
              perPage: 1,
              focus: "center",
            }}
          >
            {isLoading && <Spinner />}
            {!isLoading && transformData && transformData.map((arr: any, index) => (
              <SplideSlide 
              
                style={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                {!isLargerThan950 ? (
                  <SimpleGrid columns={[3]} gap={4}>
                    {arr && arr.map((item: any) => (
                      <CommentCard key={item.id} {...item} />
                    ))}
                  </SimpleGrid>
                ) : (
                  <CommentCard {...arr} />
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
              query={["best", "perfect", "TravelTours", "dreams"]}
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: "whatsapp.400",
                color: isLight ? "white" : "black",
              }}
            >
              We are able to provide you with the best itineraries and review
              the best tourist attractions, from exotic tropical beaches to
              breathtaking mountain ranges. Our travel experts will help you
              choose the perfect trip for your taste and needs. Discover the
              world with TravelTours and make your travel dreams come true!
            </Highlight>
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.8}
          style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}
        >
          <Image
            minH="100vh"
            w="100%"
            objectFit="cover"
            src={nature1}
            alt="Dan Abramov"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <Heading size="lg" fontWeight="normal" lineHeight="50px">
            <Highlight
              query={["best", "exciting", "forever"]}
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: "whatsapp.400",
                color: isLight ? "white" : "black",
              }}
            >
              You deserve the best, so trust us to make your travel dreams come
              true. Plan your next adventure now and discover what true
              discovery means. Get ready for exciting emotions, new
              acquaintances and unforgettable moments that will stay with you
              forever.
            </Highlight>
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.8}
          style={{ filter: "grayscale(80%) opacity(25%)", zIndex: -1 }}
        >
          <Image
            minH="100vh"
            w="100%"
            objectFit="cover"
            src={nature2}
            alt="Dan Abramov"
          />
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
}
