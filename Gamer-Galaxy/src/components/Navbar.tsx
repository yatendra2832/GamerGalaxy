import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"50px"} boxShadow="xl" rounded="md" m="2" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
