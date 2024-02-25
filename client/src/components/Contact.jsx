import React from 'react';
import { useState } from 'react';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function Contact() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    setLoading(true);
    const res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }); 
    const data = await res.json();
    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/');
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }

};

  return (
    <Flex className="flex items-center bg-hero-pattern bg-contain p-4 justify-center h-screen bg-gray-100">
      <Box className="bg-black p-28 rounded-md shadow-md w-full max-w-md mb-20">
      <h2 className="text-2xl text-formColor font-semibold mb-4">Contact Us</h2>
      <p className="text-custom mb-8">
        Need assistance? Contact us using the form below.
      </p>
      <form onSubmit={handleSubmit}>
<FormControl className="mb-5">
   <FormLabel className="text-custom w-full mb-1" htmlFor="name">Name</FormLabel>
   <Input required className="w-full" type="text" placeholder="Enter your name" name="name" autoComplete="name" id="name" onChange={handleChange} />
</FormControl>

<FormControl className="mb-5">
  <FormLabel className="text-custom mb-1" htmlFor="email">Email</FormLabel>
  <Input required className="w-full" type="email" placeholder="Enter your email" name="email" autoComplete="email" id="email" onChange={handleChange} />
</FormControl>

<FormControl className="mb-1">
  <FormLabel className="text-custom " htmlFor="phone">Phone Number</FormLabel>
  <Input required className="w-full" type="tel" placeholder="Enter your phone number" name="tel" autoComplete="tel" id="tel" onChange={handleChange} />
</FormControl>
  <Button
    type="submit"
    colorScheme="teal"
    size=""
    width="full"
    md={4}
    disabled={loading}
    className="bg-formColor hover:bg-teal-700 hover:text-white text-customBlack border-transparent rounded-sm font-semibold py-2 px-4 w-full h-3/5 mt-10 overflow-hidden"
  >
   {loading ?  'Loading...' : 'Submit' }
</Button>
</form>
      </Box>
    </Flex>
  );
}

export default Contact;