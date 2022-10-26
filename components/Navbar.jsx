import { Box, HStack, Link, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <HStack
        as="nav"
        display={{ base: "none", sm: "flex" }}
        spacing={8}
        alignItems="center"
      >
        <NextLink href={"/"} passHref>
          <Link>Home</Link>
        </NextLink>
        <NextLink href={"/about"} passHref>
          <Link>About</Link>
        </NextLink>
        <NextLink href={"/portfolio"} passHref>
          <Link>Portfolio</Link>
        </NextLink>
        <NextLink href={"/blog"} passHref>
          <Link>Blog</Link>
        </NextLink>
        <NextLink href={"/contact"} passHref>
          <Link>Contact</Link>
        </NextLink>
      </HStack>
    </Box>
  );
};

export default Navbar;
