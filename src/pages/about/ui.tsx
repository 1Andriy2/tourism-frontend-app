import { Fragment } from "react";
import {
  Box,
  Heading,
  Text,
  Highlight,
  Center,
} from "@chakra-ui/react";
import { useInView } from "@react-spring/web";

import { AnimationAbout } from "../../features";
import { UseModel } from "../../features/nav-list";
import place1 from "../../shared/images/place1.jpg";

export default function AboutPage() {
  const [firstTextRef, isOpenFirstText] = useInView()
  const { isLight } = UseModel.useThemeMode();

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
          <Heading ref={firstTextRef} size="lg" fontWeight="normal" lineHeight="50px">
            <AnimationAbout.TrailText open={isOpenFirstText}>
              <span>dfsdgdfg</span>
              <span>sdfsdfs</span>
              <span>dsfsdfs</span>
              <span>asfasdf</span>
            </AnimationAbout.TrailText>
          </Heading>
        </Box>
        <Box px={10} backdropFilter={"invert(30%)"}>
          <Heading mb={4}>
            <Center>Our history</Center>
          </Heading>
          <Box overflowY={"auto"}>
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
