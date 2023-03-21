import { Box, Button, Heading, Highlight } from "@chakra-ui/react";
import { UseModel } from "../../features/nav-list";

export default function HomePage() {
  const {isLight} = UseModel.useThemeMode()

  return (
    <Box minHeight="calc(100vh - 263px)" display="flex" flexDirection="column" justifyContent="center">
      <Heading size="3xl">
        Tourism
      </Heading>
      <Heading size="lg" fontWeight="normal" lineHeight="50px" my={10}>
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
  );
}
