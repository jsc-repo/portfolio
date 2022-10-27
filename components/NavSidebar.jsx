import { Box, Stack, Link, IconButton, Slide, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon } from "@chakra-ui/icons";

const NavSidebar = ({ isOpen, onClose, onOpen, onToggle }) => {
  return (
    <>
      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p={5}
          color="white"
          bg="orange.200"
          shadow="md"
          w="full"
          h="full"
          display={{ sm: "none" }}
          pos="fixed"
          right="0"
          bottom="0"
        >
          <Flex justifyContent={"end"}>
            <IconButton
              display={{ sm: "none" }}
              aria-label="Open Menu"
              icon={<CloseIcon />}
              onClick={onToggle}
            />
          </Flex>

          <Flex justifyContent="center" my="5em" fontSize="3xl">
            <Stack as="nav" spacing="24px">
              <NextLink href={"/"} passHref>
                <Link onClick={onClose}>Home</Link>
              </NextLink>
              <NextLink href={"/portfolio"} passHref>
                <Link onClick={onClose}>Portfolio</Link>
              </NextLink>
              <NextLink href={"/blog"} passHref>
                <Link onClick={onClose}>Blog</Link>
              </NextLink>
            </Stack>
          </Flex>
        </Box>
      </Slide>
    </>
  );
};

export default NavSidebar;
