import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"50px"} boxShadow="xl" rounded="md" m="2" />
      <Text>Gamer Galaxy</Text>
    </HStack>
  );
};

export default Navbar;
