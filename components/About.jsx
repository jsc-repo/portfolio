import {
  Box,
  Flex,
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
      // as={motion.div}
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
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Stack>
          <Heading>About Me</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            praesentium autem dolor similique nulla accusantium blanditiis
            quidem porro. Adipisci nisi eveniet dolor tenetur nemo fugit, beatae
            est corrupti sit rerum.
          </Text>
        </Stack>
      </Flex>
    </ChakraBox>
  );
};

export default About;
