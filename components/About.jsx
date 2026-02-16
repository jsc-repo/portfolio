import {
  Heading,
  Stack,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import React from "react";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const About = () => {
  return (
    <ChakraBox
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.5,
      }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Stack>
        <Heading>About Me</Heading>
        <Text fontSize="xl">
          Tech Enthusiast & Creative Problem Solver with a Passion for Innovation
        </Text>
      </Stack>
    </ChakraBox>
  );
};

export default About;
