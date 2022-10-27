import { Box, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

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

        <NextLink href={"/portfolio"} passHref>
          <Link>Portfolio</Link>
        </NextLink>

        <NextLink href={"/blog"} passHref>
          <Link>Blog</Link>
        </NextLink>
      </HStack>
    </Box>
  );
};

export default Navbar;
