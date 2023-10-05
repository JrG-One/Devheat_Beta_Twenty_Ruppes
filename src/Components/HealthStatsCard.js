import React from "react";
import { Flex, Text, Stat, StatNumber, Box, useToken } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedBox = motion(Flex);

const HealthStatsCard = ({ weight, height, BP, step, heart }) => {
  const [bgColor] = useToken("colors", ["blue.500"]);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  const decimalHeight = height;
  const minimizedHeight = Math.floor(decimalHeight);

  const number = step;
  const formattedNumber = number?.toLocaleString();

  return (
    <Flex justify="center" align="center" gap={4} py={2} m={2}>
      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg={bgColor}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box fontSize="3xl" mb={4}>
          {/* Icon for height */}
        </Box>
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Height
        </Text>
        <Stat>
          <StatNumber color="white">{minimizedHeight} cm</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="green.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box fontSize="3xl" mb={4}>
          {/* Icon for weight */}
        </Box>
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Weight
        </Text>
        <Stat>
          <StatNumber color="white">{parseInt(weight, 10)} kg</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="red.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box fontSize="3xl" mb={4}>
          {/* Icon for blood pressure */}
        </Box>
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Blood Pressure
        </Text>
        <Stat>
          <StatNumber color="white">120/80 mmHg</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="pink.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box fontSize="3xl" mb={4}>
          {/* Icon for step count */}
        </Box>
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Step Count
        </Text>
        <Stat>
          <StatNumber color="white">{formattedNumber}</StatNumber>
        </Stat>
      </AnimatedBox>

      <Flex justify="center" align="center" gap={4}>
        <AnimatedBox
          as="button"
          whileHover={{ scale: 1.05, boxShadow: "2xl" }}
          whileTap={{ scale: 0.95 }}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
          width="250px"
          p={4}
          shadow="md"
          borderWidth="2px"
          borderRadius="xl"
          bg={bgColor}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box fontSize="3xl" mb={4}>
            {/* Icon for heart rate */}
          </Box>
          <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            Heart Rate
          </Text>
          <Stat>
            <StatNumber color="white">{heart} bpm</StatNumber>
          </Stat>
        </AnimatedBox>
      </Flex>
    </Flex>
  );
};

export default HealthStatsCard;
