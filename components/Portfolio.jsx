import NextLink from "next/link";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Stack,
  Button,
  Flex,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./Card";
import { AiFillGithub } from "react-icons/ai";

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
        <Heading mb={8}>
          {/* <Highlight
            query="Portfolio"
            styles={{ px: "10", py: "1", rounded: "full", bg: "red.100" }}
          >
          </Highlight> */}
          Portfolio
        </Heading>

        <NextLink href={"/portfolio"} passHref>
          <Button
            size="md"
            as="a"
            aria-label="portfolio"
            rightIcon={<ArrowRightIcon />}
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
        <Stack spacing={10}>
          <Box>
            <Card
              title="Full Stack Budget App"
              desc={
                "Full stack budget app made with Django Rest Framework and React. Users can login with GitHub/Google then create a project and start tracking expenses while being able to view statistics and a graph about their spending habits. "
              }
              variants={listItem}
              tags={[
                "Python",
                "JS",
                "React",
                "Django",
                "Django Rest Framework",
              ]}
              href="https://github.com/jsc-repo/react_dotnet_blog_api"
            />
          </Box>

          <Box>
            <Card
              title="Full Stack Blog App"
              desc={
                "A simple blog made with .NET Web API and React. Users can sign up/login and start creating blog posts. On the backend, .NET handles authentication with JWT and refresh tokens for a better user experience."
              }
              variants={listItem}
              href="https://github.com/jsc-repo/react_dotnet_blog_api"
              tags={["React", ".NET Web API", "CSharp", "JS"]}
            />
          </Box>

          <Box>
            <Card
              title="Light Twitter Clone"
              desc={
                "Light Twitter clone made with Django MVC. Users can sign up and start creating tweets."
              }
              variants={listItem}
              tags={["Python", "Django"]}
              href="https://github.com/jsc-repo/django-social"
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Portfolio;
