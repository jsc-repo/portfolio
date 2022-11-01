import { Box, Flex, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import Card from "../components/Card";
import { motion } from "framer-motion";

const portfolio = () => {
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
    <Box as="section">
      <Stack spacing={10}>
        <Flex>
          <Heading mb={4}>
            {/* <Highlight
            query="Portfolio"
            styles={{ px: "10", py: "1", rounded: "full", bg: "red.100" }}
          >
          </Highlight> */}
            Portfolio
          </Heading>
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
          <Stack spacing={10} direction={["column"]}>
            <Box>
              <Card
                title={"Django MVC Budget App"}
                desc={
                  "A fully featured Budget app made with Django. Users can login with social accounts, create/read/edit/delete or search expenses, and get stats on their data"
                }
                variants={listItem}
                tags={["Python", "Django"]}
                href="https://github.com/jsc-repo/django_budget_app"
              />
            </Box>

            <Box>
              <Card
                title={"Image Gallery"}
                desc={
                  "An image gallery created for my wife to showcase her design and art to future clients/employers. User can interact with the admin interface to upload and delete images. Was previously deployed on PythonAnywhere with a custom domain name."
                }
                variants={listItem}
                tags={["Python", "Django"]}
                href="https://github.com/jsc-repo/design_portfolio"
              />
            </Box>

            <Box>
              <Card
                title={"URL Shortener"}
                desc={
                  "A URL shortener made with Django. User can paste a URL in and it will return a shortened URL that is saved to the database."
                }
                tags={["Python", "Django"]}
                href="https://github.com/jsc-repo/django_url_shortener"
                variants={listItem}
              />
            </Box>

            <Divider />
            <Box pb={5}>
              <Text fontSize="lg">
                Currently working on: Ecommerce, learning AWS, and Docker so
                checkout my GitHub for future works!
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default portfolio;
