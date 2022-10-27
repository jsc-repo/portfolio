import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Card = ({ title, desc, variants, ...tags }) => {
  const { toggleColorMode } = useColorMode();
  // const boxBg = useColorModeValue("yellow.100", "teal.900");
  const boxBg = useColorModeValue("purple.500", "purple.200");
  // const cardBg = useColorModeValue("teal.200", "teal.600");
  const cardBg = useColorModeValue("purple.100", "teal.500");
  return (
    <Stack spacing={5} direction={["column", "row"]}>
      <Box
        pos="relative"
        _before={{
          content: `""`,
          w: "90%",
          h: "90%",
          position: "absolute",
          zIndex: -1,
          right: "30px",
          top: "-0px",
          bg: boxBg,
        }}
        // bg={boxBg}
        maxW="600px"
        p={5}
        as={motion.div}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <Stack>
          <Box
            bg={cardBg}
            p={2}
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            borderRadius="sm"
          >
            <Heading fontSize={"2xl"}>{title}</Heading>
            <Text>{desc}</Text>
            <Text fontSize={"sm"}>tags</Text>
          </Box>
        </Stack>
      </Box>
      <Divider display={["flex", "none"]} />
      <Flex alignItems={"center"}>
        <Text fontSize={"xl"}>{desc}</Text>
      </Flex>
    </Stack>
  );
};

export default Card;
