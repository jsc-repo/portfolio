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
          Former NYC math teacher turned developer with a proven ability to
          adapt in both self-starting and collaborative environments while
          staying focused on achieving high-quality results. Resourceful and
          with a passion for learning, I am eager to venture into web
          development and help build the next modern websites with exceptional
          user experience.
        </Text>
      </Stack>
    </ChakraBox>
  );
};

export default About;
