import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { Fragment } from "react";
import { BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { MdLocalPostOffice, MdMail } from "react-icons/md";
import { Popup, Marker, TileLayer, MapContainer } from "react-leaflet";
import { ContactsForm } from "../../features";

export default function Contacts() {
  return (
    <Fragment>
      <MapContainer
        id="ContactsMAPA"
        center={[49.8413, 24.0308]}
        zoom={13}
        style={{ width: "100%", height: "calc(100vh - 120px)" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.8413, 24.0308]}>
          <Popup>
            <b>TravelTours Agency</b>
          </Popup>
        </Marker>
      </MapContainer>
      <ContactsForm />
      <Center>
        <Heading>CONTACT INFO</Heading>
      </Center>
      <Flex
        flexWrap={"wrap"}
        direction="row"
        alignItems="center"
        padding={["20px", "50px"]}
        gap={5}
        justifyContent="center"
      >
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          p={5}
          borderWidth={1}
          borderRadius="md"
          flexBasis={["100%", "auto"]}
          maxWidth="400px"
          maxHeight="80px"
        >
          <BsFillTelephoneFill size={40} style={{ marginRight: "8px" }} />
          <Text fontWeight="bold" fontSize={["14px", "inherit"]}>
            24*7 підтримка:
          </Text>
          <Text ml={2} fontSize={["12px", "inherit"]}>
            068-456-78-92,
            <br /> 097-597-56-50
          </Text>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          p={5}
          borderWidth={1}
          borderRadius="md"
          flexBasis={["100%", "auto"]}
          maxWidth="400px"
          maxHeight="80px"
        >
          <MdLocalPostOffice size={69} style={{ marginRight: "8px" }} />
          <Text fontWeight="bold" fontSize={["14px", "inherit"]}>
            Електронна пошта:
          </Text>
          <Text ml={2} fontSize={["12px", "inherit"]}>
            andrij@gmail.com, admin27@gmail.com
          </Text>
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          p={5}
          borderWidth={1}
          borderRadius="md"
          flexBasis={["100%", "auto"]}
          maxWidth="400px"
          maxHeight="80px"
        >
          <BsClockFill size={44} style={{ marginRight: "8px" }} />
          <Text fontWeight="bold" fontSize={["14px", "inherit"]}>
            Години роботи:
          </Text>
          <Text ml={2} fontSize={["12px", "inherit"]}>
            9:00AM – 6:00PM,
            <br /> Неділя - вихідний
          </Text>
        </Box>
      </Flex>
    </Fragment>
  );
}
