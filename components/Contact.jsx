import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
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

    reset();
  };
  return (
    <Box as="section" id="contact">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">name</FormLabel>
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
          <FormLabel htmlFor="email">email</FormLabel>
          <Input
            id="email"
            type="text"
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
          <FormLabel htmlFor="message">message</FormLabel>
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

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Contact;

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
  <FormControl isInvalid={errors.name}>
    <FormLabel htmlFor="name">First name</FormLabel>
    <Input
      id="name"
      placeholder="name"
      {...register("name", {
        required: "This is required",
        minLength: { value: 4, message: "Minimum length should be 4" },
      })}
    />
    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
  </FormControl>
  <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
    Submit
  </Button>
</form> */
}
