import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"50px"} boxShadow="xl" rounded="md" m="2" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
