import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" color="gray.800" p={4}>
      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="orange.100"
        p={8}
        borderRadius="md"
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="2xl" mb={4} color="orange.500">
            Thai Diner Restaurant
          </Heading>
          <Text fontSize="lg" mb={6}>
            Welcome to Thai Diner Restaurant in Coplay! Enjoy authentic Thai cuisine, from Pad Thai to Green Curry.
            Order online for take-out or delivery today!
          </Text>
          <Button as={Link} to="/menu" colorScheme="orange" size="lg">
            View Menu
          </Button>
        </Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/thai-food"
          alt="Delicious Thai Food"
          width="400px"
          height="300px"
          borderRadius="md"
          mt={{ base: 6, md: 0 }}
        />
      </Flex>

      {/* Cuisine Section */}
      <Box mt={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Our Specialties
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {["Pad Thai", "Green Curry", "Tom Kha Soup"].map((dish) => (
            <GridItem key={dish} p={4} bg="gray.100" borderRadius="md">
              <Image
                src={`http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/${dish.replace(" ", "-").toLowerCase()}`}
                alt={dish}
                width="300px"
                height="200px"
                borderRadius="md"
                mb={3}
              />
              <Text fontSize="lg" fontWeight="bold">
                {dish}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Location Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        bg="orange.50"
        p={8}
        mt={10}
        borderRadius="md"
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h2" size="lg" mb={4}>
            Visit Us
          </Heading>
          <Text fontSize="md" mb={2}>
            910 Chestnut St, Coplay, PA 18037
          </Text>
          <Text fontSize="md" mb={4}>
            (610) 440-2668
          </Text>
          <Button as={Link} to="/visit" colorScheme="orange">
            Get Directions
          </Button>
        </Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/restaurant-exterior"
          alt="Restaurant Exterior"
          width="400px"
          height="300px"
          borderRadius="md"
          mt={{ base: 6, md: 0 }}
        />
      </Flex>

      {/* Call to Action */}
      <VStack mt={10} p={6} bg="orange.100" borderRadius="md" textAlign="center">
        <Heading as="h2" size="lg">
          Order Online Today!
        </Heading>
        <Text fontSize="md">
          Enjoy our delicious Thai food from the comfort of your home. Place an order for take-out or delivery now.
        </Text>
        <Button as={Link} to="/menu" colorScheme="orange" size="lg">
          Order Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;