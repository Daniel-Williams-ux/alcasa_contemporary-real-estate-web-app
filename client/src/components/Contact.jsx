import React from 'react';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex className="flex items-center p-4 justify-center h-screen bg-gray-100 ">
      <Box className="bg-black p-28 rounded-md shadow-md w-full max-w-md">
      <h2 className="text-2xl text-formColor font-semibold mb-4">Contact Us</h2>
      <p className="text-custom mb-8">
        Need assistance? Contact us using the form below.
      </p>
      <FormControl className="mb-5">
  <FormLabel className="text-custom w-full mb-1" htmlFor="name">Name</FormLabel>
  <Input type="text" placeholder="Enter your name" />
</FormControl>

<FormControl className="mb-5">
  <FormLabel className="text-custom mb-1" htmlFor="email">Email</FormLabel>
  <Input type="email" placeholder="Enter your email" />
</FormControl>

<FormControl className="mb-1">
  <FormLabel className="text-custom" htmlFor="phone">Phone Number</FormLabel>
  <Input type="tel" placeholder="Enter your phone number" />
</FormControl>

      <Button
  type="submit"
  colorScheme="teal"
  size=""
  width="full"
  md={4}
  className="bg-formColor  hover:bg-teal-700 text-customBlack border-transparent rounded-sm font-bold py-2 px-4 w-full h-3/5 mt-10"
>
  Submit
</Button>
      </Box>
    </Flex>
  );
}

export default Contact;