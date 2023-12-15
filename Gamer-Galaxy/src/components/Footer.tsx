// Footer.tsx
import React from "react";
import { Flex, Text, Link, HStack } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      p={4}
      bg="purple.800"
      color="white"
      marginTop={10}
    >
      <HStack spacing={50}>
        <Text fontSize="lg" color={"gray.300"}>
          © 2023 Gamer Galaxy
        </Text>
        <Text fontSize="sm" color={"gray.300"}>
          Created By : Yatendra Singh
        </Text>
        <Link href="#" fontSize="sm">
          About Us
        </Link>
        <Link href="#" fontSize="sm">
          Privacy Policy
        </Link>
        <Link href="#" fontSize="sm">
          Terms of Service
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
