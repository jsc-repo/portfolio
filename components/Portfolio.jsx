import NextLink from "next/link";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Stack,
  Button,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./Card";

const Portfolio = () => {
  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3,
        delayChildren: 0.5,
        duration: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  return (
    <Box as="section" id="portfolio">
      <Flex>
        <Heading mb={4}>
          {/* <Highlight
            query="Portfolio"
            styles={{ px: "10", py: "1", rounded: "full", bg: "red.100" }}
          >
          </Highlight> */}
          Portfolio
        </Heading>

        <NextLink href={"/portfolio"} passHref>
          <Button
            as="a"
            aria-label="portfolio"
            rightIcon={<ArrowRightIcon />}
            ml={4}
          >
            See More
          </Button>
        </NextLink>
      </Flex>

      <Box
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={container}
      >
        <Stack spacing={5} direction={["column"]}>
          <Box>
            <Card
              title={"project 1"}
              desc={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
              }
              variants={listItem}
            />
          </Box>

          <Box>
            <Card
              title={"project 2"}
              desc={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
              }
              variants={listItem}
            />
          </Box>

          <Box>
            <Card
              title={"project 3"}
              desc={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
              }
              variants={listItem}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Portfolio;
