import { Box, Stack, Link, IconButton, Slide, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon } from "@chakra-ui/icons";

const NavSidebar = ({ isOpen, onClose, onOpen, onToggle }) => {
  return (
    <>
      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p={[1, 4]}
          color="white"
          bg="orange.200"
          shadow="md"
          w="full"
          h="full"
          display={{ sm: "none" }}
          pos="fixed"
          right="0"
          bottom="0"
          transition=""
        >
          <Flex justifyContent={"end"}>
            <IconButton
              mt={4}
              display={{ sm: "none" }}
              aria-label="Open Menu"
              icon={<CloseIcon />}
              onClick={onToggle}
            />
          </Flex>

          <Flex justifyContent="center" my="5em">
            <Stack as="nav" fontSize="2xl" spacing="24px">
              <NextLink href={"/"} passHref>
                <Link>Home</Link>
              </NextLink>
              <NextLink href={"/about"} passHref>
                <Link>About</Link>
              </NextLink>
              <NextLink href={"/works"} passHref>
                <Link>Works</Link>
              </NextLink>
              <NextLink href={"/blog"} passHref>
                <Link>Blog</Link>
              </NextLink>
              <NextLink href={"/contact"} passHref>
                <Link>Contact</Link>
              </NextLink>
            </Stack>
          </Flex>
        </Box>
      </Slide>
    </>
  );
};

export default NavSidebar;
