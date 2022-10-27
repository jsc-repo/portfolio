import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import NavSidebar from "./NavSidebar";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const buttonBg = useColorModeValue("purple.200", "yellow.500");
  const hoverBg = useColorModeValue("purple.300", "yellow.600");

  const handleScroll = () => {
    console.log("scroll");
    const contact = document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth" });
  };
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box as="header" py={5} mb={[5, 150]}>
      <Flex w="100%" alignItems="center">
        <Heading>
          <Typewriter
            options={{
              strings: "JSCS",
              autoStart: true,
              delay: 300,
            }}
          />

          {/* <Highlight query="JS" styles={{ bg: "orange.100" }} id="JSCS">
          </Highlight> */}
        </Heading>
        <Spacer />
        <Navbar />
        <Spacer />
        <HStack>
          <IconButton
            aria-label="toggle dark mode"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
          <Button
            // backgroundColor="purple.500"
            bg={buttonBg}
            _hover={{
              bg: hoverBg,
            }}
            // color="gray.50"
            // _hover={{
            //   bg: "yellow.300",
            //   color: "gray.800",
            // }}
            display={{ base: "none", sm: "flex" }}
            onClick={handleScroll}
          >
            Let&apos;s Talk
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
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
