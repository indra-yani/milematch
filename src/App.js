import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#f5f6f8" minH="100vh" p={6}>
      {/* Top bar */}
      <Box
        bg="white"
        rounded="lg"
        shadow="sm"
        p={4}
        mb={6}
      >
        <Heading fontSize="2xl" fontWeight="bold" color="gray.800">
          MileMatch
        </Heading>
        <Text color="gray.600" fontSize="sm">
          Mumbai, Maharashtra
        </Text>
      </Box>

      {/* Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {/* Card 1: User info */}
        <Box bg="white" p={6} rounded="lg" shadow="sm">
          <Heading size="sm" mb={1}>
            Hello, Shubham <span role="img" aria-label="wave">👋</span>
          </Heading>
          <Text fontSize="sm" color="gray.700">
            Aadhaar Verified
          </Text>
          <Text fontSize="xs" color="gray.500" mt={1}>
            Ready for your next journey?
          </Text>

          <SimpleGrid columns={3} spacing={4} mt={4}>
            <Stat textAlign="center">
              <StatNumber fontSize="lg" color="blue.600">
                120
              </StatNumber>
              <StatLabel fontSize="xs" color="gray.500">
                Total Trips
              </StatLabel>
            </Stat>
            <Stat textAlign="center">
              <StatNumber fontSize="lg" color="green.600">
                ₹12,450
              </StatNumber>
              <StatLabel fontSize="xs" color="gray.500">
                Money Saved
              </StatLabel>
            </Stat>
            <Stat textAlign="center">
              <StatNumber fontSize="lg" color="orange.400">
                4.8
              </StatNumber>
              <StatLabel fontSize="xs" color="gray.500">
                Eco Score
              </StatLabel>
            </Stat>
          </SimpleGrid>
        </Box>

        {/* Card 2: Find Trips */}
        <Box
          bg="white"
          p={6}
          rounded="lg"
          shadow="sm"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="medium" color="gray.700">
            Find Trips
          </Text>
        </Box>

        {/* Card 3: Post Trips */}
        <Box
          bg="white"
          p={6}
          rounded="lg"
          shadow="sm"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="medium" color="gray.700">
            Post Trips
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default App;
