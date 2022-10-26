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
      >
        <Stack>
          <Box bg="teal.200" p={2} as={motion.div} whileHover={{ scale: 1.1 }}>
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
