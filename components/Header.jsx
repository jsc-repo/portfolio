import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import NavSidebar from "./NavSidebar";

const Header = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box as="header" py={5}>
      <Flex w="100%" alignItems="center">
        <Heading>JSCS</Heading>
        <Spacer />
        <Navbar />
        <Spacer />
        <Button
          backgroundColor="purple.500"
          color="gray.50"
          _hover={{
            bg: "yellow.300",
            color: "gray.800",
          }}
          display={{ base: "none", sm: "flex" }}
        >
          <Text>Let's Talk</Text>
        </Button>

        {isOpen ? (
          <NavSidebar
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            onToggle={onToggle}
          />
        ) : (
          <IconButton
            display={{ sm: "none" }}
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onToggle}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Header;
