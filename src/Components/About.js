import React from "react";
import { Box, Container, Heading, Text, Grid } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box bg="gray.800" py={16}>
      <Container maxW="xl">
        <Box
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          textAlign="center"
          animation="scale-in-center 0.5s"
        >
          <Heading as="h1" size="xl" mb={4} color="black">
            About Fitness Track
          </Heading>
          <Text fontSize="lg" color="black">
            Fitness Track is a comprehensive fitness tracking app designed to
            help you monitor and improve your physical health and wellness. With
            our app, you can easily track your workouts, set fitness goals,
            monitor your progress, and stay motivated on your fitness journey.
          </Text>
          <Text fontSize="lg" mt={4} color="black">
            Our mission is to empower individuals to lead healthier lives by
            providing them with the tools and insights they need to make
            positive changes. Whether you're a beginner or an advanced fitness
            enthusiast, Fitness Track is here to support you every step of the
            way.
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={12} color="black">
            {/* AdvantageCard components */}
          </Grid>

          <Text fontSize="lg" mt={4}>
            Start your fitness journey with Fitness Track today and take control
            of your health and well-being!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
