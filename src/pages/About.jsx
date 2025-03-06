import { Box, Heading, Text, Image, VStack, HStack, Link, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box p={4} maxW="1200px" mx="auto">
      {/* Hero Section */}
      <VStack spacing={4} textAlign="center" mb={8}>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/restaurant-exterior" 
          alt="Thai Diner Restaurant Exterior" 
          width="100%" 
          maxH="400px" 
          objectFit="cover" 
          borderRadius="md"
        />
        <Heading size="xl" color="orange.500">Welcome to Thai Diner Restaurant</Heading>
        <Text fontSize="lg" maxW="800px">
          Experience the authentic flavors of Thailand right here in Coplay! From classic Pad Thai to rich Green Curry, we bring you the best of Thai cuisine.
        </Text>
      </VStack>

      {/* About Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <Box>
          <Heading size="lg" mb={4}>Authentic Thai Cuisine</Heading>
          <Text fontSize="md">
            We specialize in a variety of Thai dishes, including flavorful curries, fresh salads, and delicious noodle dishes. Whether you're a fan of spicy food or prefer something mild, we have something for everyone.
          </Text>
        </Box>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/thai-food" 
          alt="Thai Food" 
          width="100%" 
          maxH="300px" 
          objectFit="cover" 
          borderRadius="md"
        />
      </SimpleGrid>

      {/* Location Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mt={10}>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/restaurant-interior" 
          alt="Restaurant Interior" 
          width="100%" 
          maxH="300px" 
          objectFit="cover" 
          borderRadius="md"
        />
        <Box>
          <Heading size="lg" mb={4}>Visit Us</Heading>
          <Text fontSize="md">
            We are conveniently located on Chestnut St next to USPS and just a few minutes from Stiles Park. Stop by for a dine-in experience or order online for takeout or delivery!
          </Text>
          <Text fontSize="md" mt={2} fontWeight="bold">
            910 Chestnut St, Coplay, PA 18037
          </Text>
          <Text fontSize="md" fontWeight="bold">(610) 440-2668</Text>
        </Box>
      </SimpleGrid>

      {/* Cuisine & Services */}
      <Box mt={10} textAlign="center">
        <Heading size="lg" mb={4}>Our Offerings</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <Box textAlign="center">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/noodles" 
              alt="Noodles" 
              width="100%" 
              maxH="200px" 
              objectFit="cover" 
              borderRadius="md"
            />
            <Text fontSize="md" mt={2} fontWeight="bold">Noodles</Text>
          </Box>
          <Box textAlign="center">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/curry" 
              alt="Curry" 
              width="100%" 
              maxH="200px" 
              objectFit="cover" 
              borderRadius="md"
            />
            <Text fontSize="md" mt={2} fontWeight="bold">Curry</Text>
          </Box>
          <Box textAlign="center">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/dessert" 
              alt="Dessert" 
              width="100%" 
              maxH="200px" 
              objectFit="cover" 
              borderRadius="md"
            />
            <Text fontSize="md" mt={2} fontWeight="bold">Desserts</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Navigation Links */}
      <HStack spacing={6} justify="center" mt={10}>
        <Link as={RouterLink} to="/" color="orange.500" fontSize="lg" fontWeight="bold">Home</Link>
        <Link as={RouterLink} to="/menu" color="orange.500" fontSize="lg" fontWeight="bold">Menu</Link>
        <Link as={RouterLink} to="/visit" color="orange.500" fontSize="lg" fontWeight="bold">Visit</Link>
        <Link as={RouterLink} to="/contact" color="orange.500" fontSize="lg" fontWeight="bold">Contact</Link>
      </HStack>
    </Box>
  );
};

export default About;