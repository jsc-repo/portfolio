import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Card = ({ title, desc, variants, tags, href, liveHref }) => {
  const [isMounted, setIsMounted] = useState("false");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const boxBg = useColorModeValue("purple.500", "teal.200");
  const cardBg = useColorModeValue("purple.100", "teal.500");

  return (
    // <Stack spacing={5} direction={["column", "row"]}>
    <SimpleGrid columns={["1", "2"]}>
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
        // maxW="600px"
        // w="200vw"
        p={4}
        as={motion.div}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <Flex
          flexDirection={"column"}
          bg={cardBg}
          p={2}
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          borderRadius="sm"
          h="300px"
          w="full"
        >
          <Heading color="gray.800" fontFamily={"Raleway"}>
            {title}
          </Heading>

          <Spacer />

          <Stack>
            <Box>
              {tags?.map((tag) => (
                <Tag m={1} key={tag}>
                  #{tag}
                </Tag>
              ))}
            </Box>
          </Stack>
        </Flex>
      </Box>
      <Divider display={["flex", "none"]} />

      <Stack mt={["2", "0"]} direction="column">
        <Stack direction={"row"}>
          <Link href={href} isExternal aria-label="link to github project">
            <IconButton icon={<AiFillGithub />} size="md" />
          </Link>

          {liveHref && (
            <Link
              href={liveHref}
              isExternal
              aria-label="link to project website"
            >
              <IconButton icon={<ExternalLinkIcon />} size="md" />
            </Link>
          )}
        </Stack>
        <Text fontSize={"xl"}>{desc}</Text>
      </Stack>
      {/* <Flex alignItems="center"></Flex> */}
    </SimpleGrid>
  );
};

export default Card;
