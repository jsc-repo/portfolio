import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Highlight,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = ({ ref }) => {
  const contactButtonBg = useColorModeValue("purple", "yellow");
  const highlightBg = useColorModeValue("purple.100", "yellow.100");
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      "#contact-form",
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );

    toast({
      title: "Sent!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    reset();
  };
  return (
    <Box
      as="section"
      w="full"
      borderWidth={[0, 1]}
      p={[0, 8]}
      pb={5}
      boxShadow={[null, "lg"]}
    >
      <Box textAlign="center" mb={5}>
        <Heading>
          <Highlight
            styles={{
              bg: highlightBg,
              rounded: "full",
              px: "2",
            }}
            query="build"
          >
            Let&apos;s build something together
          </Highlight>
        </Heading>
      </Box>

      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} id="contact">
          <FormControl isInvalid={errors.name}>
            {/* <FormLabel htmlFor="name">name</FormLabel> */}
            <Input
              type="text"
              id="name"
              placeholder="name"
              {...register("name", {
                required: "please enter your name",
                minLength: { value: 4, message: "Minimum length of 4" },
                maxLength: { value: 100, message: "Max length of 100" },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            {/* <FormLabel htmlFor="email">email</FormLabel> */}
            <Input
              id="email"
              type="email"
              placeholder="email"
              {...register("email", {
                required: "please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.message}>
            {/* <FormLabel htmlFor="message">message</FormLabel> */}
            <Textarea
              id="message"
              type="text"
              placeholder="message"
              {...register("message", {
                required: "please write a message",
                maxLength: { value: 2000, message: "Max length of 2000" },
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Flex justifyContent={"center"}>
            <Button
              variant={"outline"}
              justifyContent="center"
              colorScheme={contactButtonBg}
              isLoading={isSubmitting}
              type="submit"
              w={"xs"}
            >
              SEND
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
