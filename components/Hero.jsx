import NextLink from "next/link";
import NextImage from "next/image";

import Typewriter from "typewriter-effect";
import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  const circleBg = useColorModeValue("orange.100", "yellow.400");
  const handleScroll = () => {
    const contact = document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Stack direction={["column", "column", "row"]} spacing={10}>
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
            bg: circleBg,
            right: "-40px",
            display: ["none", "flex"],
          }}
        >
          <Heading as="h1" size="4xl" style={{ zIndex: 10 }} w="100%">
            <Typewriter
              options={{
                strings: "Samuel Choi",
                autoStart: true,
                delay: 200,
              }}
            />
          </Heading>
          <Stack direction={["column", "row"]} mt={5}>
            <NextLink
              href={
                "https://drive.google.com/file/d/1xGbtMwzhVC9phdkN2U7xTZKmVFdXhSyg/view?usp=share_link"
              }
              passHref
            >
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                aria-label="resume"
                leftIcon={<ExternalLinkIcon />}
              >
                Resume
              </Button>
            </NextLink>
            <Button onClick={handleScroll} leftIcon={<EmailIcon />}>
              Email
            </Button>
            <NextLink
              href={"https://github.com/jsc-repo?tab=repositories"}
              passHref
            >
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                aria-label="github link"
                leftIcon={<AiFillGithub />}
              >
                GitHub
              </Button>
            </NextLink>

            <NextLink
              href={"https://www.linkedin.com/in/samuel-choi-38ab7b253/"}
              passHref
            >
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                aria-label="Linked In link"
                leftIcon={<AiFillLinkedin />}
              >
                LinkedIn
              </Button>
            </NextLink>
          </Stack>
        </Box>
      </Box>

      <Box>
        <Image
          src={"/profile.png"}
          boxSize="300px"
          objectFit="cover"
          mx="auto"
          alt="Profile Picture"
          borderRadius="full"
        />
      </Box>
    </Stack>
  );
};

export default Hero;
