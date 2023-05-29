import {
  Box,
  Heading,
  Text,
  Image,
  Highlight,
  Center,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Fragment, useEffect, useRef, useState } from "react";
import { UseModel } from "../../features/nav-list";
import place1 from "../../shared/images/place1.jpg";
import place2 from "../../shared/images/place4.png";
import { useMediaQuery } from "@chakra-ui/react";

import {
  FaGlobe,
  FaSuitcase,
  FaHeart,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { urls } from "../../shared/config";

export default function AboutPage() {
  const { isLight } = UseModel.useThemeMode();
  const [isLargerThan660] = useMediaQuery("(max-width: 660px)");

  return (
    <Fragment>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        background={`url(${place1})`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundAttachment={"fixed"}
      >
        <Box
          px={10}
          minHeight="calc(100vh - 123px)"
          backdropFilter={"invert(30%)"}
        >
          <Heading size="3xl">About TravelTours</Heading>
          <Heading size="lg" fontWeight="normal" lineHeight="50px">
            <Highlight
              query={["adventure", "discover", "dreams", "world"]}
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: "whatsapp.400",
                color: isLight ? "white" : "black",
              }}
            >
              Welcome to TravelTours - your trusted guide to the world travel
              and adventure! With us you can discover new countries, get to know
              different cultures and enjoy unforgettable moments.
            </Highlight>
          </Heading>
          <Heading size="lg" fontWeight="normal" lineHeight="50px">
            <Highlight
              query={["best", "experience", "dreams", "goal"]}
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: "whatsapp.400",
                color: isLight ? "white" : "black",
              }}
            >
              We are a team of enthusiasts who specialize in creating the best
              travels for our customers. Our goal is to provide give you an
              unforgettable experience, provide reliable service and make your
              dreams come true about traveling through reality.
            </Highlight>
          </Heading>
        </Box>
        <Box px={10} backdropFilter={"invert(30%)"}>
          <Heading mb={4}>
            <Center>Our history</Center>
          </Heading>
          <Box maxH={250} overflowY={"auto"}>
            <Text fontSize="xl" mt={4} pr={4}>
              Once upon a time, in a small village on the very coast, a cozy and
              picturesque place, there lived an inventive and dreamy boy named
              Max. He always dreamed of traveling and discovering new countries
              and cultures. Max spent every free moment fantasizing about the
              unforgettable places he had seen in photographs and read in books.
            </Text>
            <Text fontSize="xl" mt={4} pr={4}>
              One day, Max, tired of his routine work in a local cafe, spent a
              lot of time in front of the world map, lingering in various exotic
              places. He realizes that his true passion is to help other people
              realize their dreams of travel. At that moment, Max realized that
              he needed to create his own company to help people discover the
              world.
            </Text>
            <Text fontSize="xl" mt={4} pr={4}>
              This is how the company "TravelTours" was born. Max teamed up with
              his best friend Jack, who had extensive experience in marketing
              and entrepreneurship. Together, they created a business plan,
              defining their goals and values: to provide the best travel
              services, to ensure the comfort and safety of customers, and to
              fulfill their travel dreams. TravelTours has become a model of
              reliability and quality in the tourism industry. Their clients
              have returned time and time again, recommending their services to
              their friends and family.
            </Text>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
