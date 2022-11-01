import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
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
        <Box ml="-15px">
          <NextLink href="/" passHref>
            <Link>
              <Image src="/favicon.png" alt="logo" boxSize={"75px"} />
            </Link>
          </NextLink>
        </Box>

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
            bg={buttonBg}
            _hover={{
              bg: hoverBg,
            }}
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
