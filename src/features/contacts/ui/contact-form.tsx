import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Button,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { Validate } from "../model/validators";
import useSendMessage from "../model/use-send-message";

export default function ContactForm() {
  const { mutate, isLoading } = useSendMessage();

  const formik = useFormik({
    initialValues: { name: "", phone: "", message: "" },
    validationSchema: Validate,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <form style={{margin: "20px", padding: "50px", outline: "1px solid green", borderRadius: "12px"}} onSubmit={formik.handleSubmit}>
      <Center>
        <Heading>CONTACT US</Heading>
      </Center>
      <FormControl isInvalid={!!formik.errors.name}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {!formik.errors.name ? (
          <FormHelperText>
            Enter the name you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Name is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!formik.errors.phone}>
        <FormLabel>Phone</FormLabel>
        <Input
          name="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {!formik.errors.phone ? (
          <FormHelperText>
            Enter the phone you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Phone is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!formik.errors.message}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          size="sm"
          placeholder="Write your message"
          resize={"vertical"}
          maxH={"300px"}
        />
        {!formik.errors.message ? (
          <FormHelperText>
            Enter the message you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Message is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button marginTop={"6"} type="submit" colorScheme="teal" size="md">
        Send message
      </Button>
    </form>
  );
}
