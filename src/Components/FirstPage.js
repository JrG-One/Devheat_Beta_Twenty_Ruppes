import React, { useEffect } from "react";
import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

function FirstPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    });
  }, [controls]);

  const handleLogin = async () => {
    try {
      const response = await axios.get("https://http://localhost:3000/auth/google");
      console.log(response.data.authUrl);
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Container
      maxW="2550px"
      maxHeight={1670}
      textAlign="center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "870px",
        backgroundColor: "black",
      }}
    >
      <VStack
        spacing={4}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Heading as="h1" size="2xl" color="white" mt={550}>
            Fitness Tracker
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Text fontSize="xl" color="white">
            Track your fitness goals, stay motivated, and achieve results.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            colorScheme="red"
            size="lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogin}
          >
            Login with Gmail
          </Button>
        </motion.div>
      </VStack>
    </Container>
  );
}

export default FirstPage;
