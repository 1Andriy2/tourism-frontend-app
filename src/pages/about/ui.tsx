import { Fragment } from "react";
import {
  Box,
  Heading,
  Text,
  Highlight,
  Center,
  Flex,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { useInView } from "@react-spring/web";

import { AnimationAbout } from "../../features";
import { UseModel } from "../../features/nav-list";
import place1 from "../../shared/images/place1.jpg";
import place2 from "../../shared/images/place3.png";
import {
  FaGlobe,
  FaSuitcase,
  FaHeart,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutPage() {
  const [firstTextRef, isOpenFirstText] = useInView();
  const { isLight } = UseModel.useThemeMode();
  const [isLargerThan950] = useMediaQuery("(max-width:950px)");

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
        color={"white"}
      >
        <Box
          p={10}
          minHeight="calc(100vh - 123px)"
          backgroundColor={"rgb(0, 0, 0, 0.4)"}
        >
          <Heading
            ref={firstTextRef}
            size="lg"
            fontWeight="normal"
            lineHeight="50px"
            textAlign={"center"}
          >
            {!isLargerThan950 ? (
              <AnimationAbout.TrailText open={isOpenFirstText}>
                <Heading size="3xl">About TravelTours</Heading>{" "}
                <Text>
                  Welcome to TravelTours - your trusted guide to the world
                  travel and adventure!
                </Text>
                <Text>
                  With us you can discover new countries, get to know different
                  cultures and enjoy
                </Text>
                <Text>unforgettable moments.</Text>{" "}
                <Text>
                  We are a team of enthusiasts who specialize in creating the
                  best travels for our
                </Text>
                <Text>
                  customers. Our goal is to provide give you an unforgettable
                  experience, provide
                </Text>
                <Text>
                  reliable service and make your dreams come true about
                  traveling through
                </Text>
                <Text>reality.</Text>
              </AnimationAbout.TrailText>
            ) : (
              <AnimationAbout.SpringAbout
                option={{ from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1 } }}
              >
                <Heading size="3xl" mb={"60px"}>About TravelTours</Heading>
                <span>
                  Welcome to TravelTours - your trusted guide to the world
                  travel and adventure!
                </span>
                <span>
                  With us you can discover new countries, get to know different
                  cultures and enjoy
                </span>
                <span>unforgettable moments.</span>{" "}
                <span>
                  We are a team of enthusiasts who specialize in creating the
                  best travels for our
                </span>
                <span>
                  customers. Our goal is to provide give you an unforgettable
                  experience, provide
                </span>
                <span>
                  reliable service and make your dreams come true about
                  traveling through
                </span>
                <span>reality.</span>
              </AnimationAbout.SpringAbout>
            )}
          </Heading>
        </Box>
        <Box
          p={10}
          backdropFilter={"invert(30%)"}
          backgroundColor={"rgb(0, 0, 0, 0.9)"}
        >
          <AnimationAbout.SpringAbout
            option={{ from: { y: 500 }, to: [{ y: 0 }, { y: 0 }] }}
          >
            <Heading mb={4}>
              <Center>Our history</Center>
            </Heading>
          </AnimationAbout.SpringAbout>
          <Box overflowY={"auto"}>
            <AnimationAbout.SpringAbout
              option={{ from: { x: 1200 }, to: [{ x: 0 }, { x: 0 }] }}
            >
              <Text fontSize="xl" mt={4} pr={4}>
                Once upon a time, in a small village on the very coast, a cozy
                and picturesque place, there lived an inventive and dreamy boy
                named Max. He always dreamed of traveling and discovering new
                countries and cultures. Max spent every free moment fantasizing
                about the unforgettable places he had seen in photographs and
                read in books.
              </Text>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{ from: { x: -1200 }, to: [{ x: 0 }, { x: 0 }] }}
            >
              <Text fontSize="xl" mt={4} pr={4}>
                One day, Max, tired of his routine work in a local cafe, spent a
                lot of time in front of the world map, lingering in various
                exotic places. He realizes that his true passion is to help
                other people realize their dreams of travel. At that moment, Max
                realized that he needed to create his own company to help people
                discover the world.
              </Text>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{ from: { x: 1200 }, to: [{ x: 0 }, { x: 0 }] }}
            >
              <Text fontSize="xl" mt={4} pr={4}>
                This is how the company "TravelTours" was born. Max teamed up
                with his best friend Jack, who had extensive experience in
                marketing and entrepreneurship. Together, they created a
                business plan, defining their goals and values: to provide the
                best travel services, to ensure the comfort and safety of
                customers, and to fulfill their travel dreams. TravelTours has
                become a model of reliability and quality in the tourism
                industry. Their clients have returned time and time again,
                recommending their services to their friends and family.
              </Text>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{ from: { x: -1200 }, to: [{ x: 0 }, { x: 0 }] }}
            >
              <Text fontSize="xl" mt={4} pr={4}>
                This is how the company "TravelTours" was born. Max teamed up
                with his best friend Jack, who had extensive experience in
                marketing and entrepreneurship. Together, they created a
                business plan, defining their goals and values: to provide the
                best travel services, to ensure the comfort and safety of
                customers, and to fulfill their travel dreams. TravelTours has
                become a model of reliability and quality in the tourism
                industry. Their clients have returned time and time again,
                recommending their services to their friends and family.
              </Text>
            </AnimationAbout.SpringAbout>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        background={`url(${place2})`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundAttachment={"fixed"}
        color={"white"}
      >
        <Box p={10} backgroundColor={"rgb(0, 0, 0, 0.4)"}>
          <Heading mb="60px">
            <Center>Why choose us?</Center>
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="stretch"
            flexWrap="wrap"
            mt={4}
            gap="20px"
          >
            <AnimationAbout.SpringAbout
              option={{
                from: [{ x: -1200 }, { y: -1200 }],
                to: [{ x: 0 }, { y: 0 }],
              }}
            >
              <Box
                flex="1"
                p={4}
                borderWidth={1}
                borderRadius="md"
                minW="200px"
                maxW="300px"
              >
                <Flex alignItems="stretch" my={"auto"} gap="5px">
                  <Icon as={FaGlobe} boxSize={6} color="green.500" mb={2} />
                  <Text fontSize="lg">Expertise</Text>
                </Flex>
                <Text fontSize="md">
                  Our team consists of experienced specialists who have in-depth
                  knowledge of various areas and know how to develop the perfect
                  route for you.
                </Text>
              </Box>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{
                from: [{ x: 0 }, { y: -1200 }],
                to: [{ x: 0 }, { y: 0 }],
              }}
            >
              <Box
                flex="1"
                p={4}
                borderWidth={1}
                borderRadius="md"
                minW="200px"
                maxW="300px"
              >
                <Flex alignItems="stretch" my={"auto"} gap="5px">
                  <Icon as={FaSuitcase} boxSize={6} color="green.500" mb={2} />
                  <Text fontSize="lg">Variety</Text>
                </Flex>
                <Text fontSize="md">
                  We offer a wide selection of trips - from exciting adventures
                  in the mountains to relaxing vacations on the beach. We there
                  is something for every taste!
                </Text>
              </Box>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{
                from: [{ x: 1200 }, { y: -1200 }],
                to: [{ x: 0 }, { y: 0 }],
              }}
            >
              <Box
                flex="1"
                p={4}
                borderWidth={1}
                borderRadius="md"
                minW="200px"
                maxW="300px"
              >
                <Flex alignItems="stretch" my={"auto"} gap="5px">
                  <Icon as={FaHeart} boxSize={6} color="green.500" mb={2} />
                  <Text fontSize="lg">Personalization</Text>
                </Flex>
                <Text fontSize="md">
                  We understand that every trip is unique. That's why we work
                  with you to make your trip truly special, taking into account
                  your individual needs and wishes.
                </Text>
              </Box>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{
                from: [{ x: -1200 }, { y: 1200 }],
                to: [{ x: 0 }, { y: 0 }],
              }}
            >
              <Box
                flex="1"
                p={4}
                borderWidth={1}
                borderRadius="md"
                minW="200px"
                maxW="300px"
              >
                <Flex alignItems="stretch" my={"auto"} gap="5px">
                  <Icon as={FaStar} boxSize={6} color="green.500" mb={2} />
                  <Text fontSize="lg">Quality</Text>
                </Flex>
                <Text fontSize="md">
                  We strive for high quality in everything we do - from the
                  selection of hotels and carriers to the organization of
                  excursions.
                </Text>
              </Box>
            </AnimationAbout.SpringAbout>
            <AnimationAbout.SpringAbout
              option={{
                from: [{ x: 1200 }, { y: 1200 }],
                to: [{ x: 0 }, { y: 0 }],
              }}
            >
              <Box
                flex="1"
                p={4}
                borderWidth={1}
                borderRadius="md"
                minW="200px"
                maxW="300px"
              >
                <Flex alignItems="stretch" my={"auto"} gap="5px">
                  <Icon
                    as={FaCheckCircle}
                    boxSize={6}
                    color="green.500"
                    mb={2}
                  />
                  <Text fontSize="lg">Reliability</Text>
                </Flex>
                <Text fontSize="md">
                  We pay close attention to details and guarantee you a high
                  level of service at every stage of your journey. You you can
                  trust us.
                </Text>
              </Box>
            </AnimationAbout.SpringAbout>
          </Flex>
        </Box>
      </Box>
    </Fragment>
  );
}
