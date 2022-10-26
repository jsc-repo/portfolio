import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Stack direction={["column", "row"]} spacing={10}>
      <Box>
        <Flex>
          <Heading size="lg">Hi! My name is </Heading>
        </Flex>
        <Box
          pos="relative"
          _before={{
            content: `""`,
            position: "absolute",
            zIndex: -1,
            w: "100vh",
            h: "100vh",
            border: "2px transparent",
            borderRadius: "50%",
            borderColor: "purple.100",
            opacity: 0.6,
            bg: "purple.300",
            right: "-40px",
            display: ["none", "flex"],
          }}
        >
          <Heading as="h1" size="4xl" style={{ zIndex: 10 }} w="100%">
            Samuel Choi.
          </Heading>
          <Stack direction={["column", "row"]} mt={5}>
            <Button>Resume</Button>
            <Button>Email</Button>
            <Button>GitHub</Button>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Image
          mx="auto"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          borderRadius="full"
        />
      </Box>
    </Stack>
  );
};

export default Hero;
