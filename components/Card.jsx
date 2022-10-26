import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Card = ({ title, desc, variants, ...tags }) => {
  return (
    <Stack spacing={5} direction={["column", "row"]}>
      <Box
        maxW="600px"
        p={10}
        bg="orange.100"
        as={motion.div}
        variants={variants}
        // initial={{ opacity: 0, x: -50 }}
        // visible={{ opacity: 1, x: 0 }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <Stack>
          <Box
            bg="teal.200"
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
        <Text>{desc}</Text>
      </Flex>
    </Stack>
  );
};

export default Card;
