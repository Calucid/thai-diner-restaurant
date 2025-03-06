import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Visit Thai Diner Restaurant
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/restaurant-exterior"
          alt="Thai Diner Restaurant Exterior"
          width="100%"
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            910 Chestnut St, Coplay, PA 18037
          </Text>
          <Text fontSize="lg">(610) 440-2668</Text>
        </Box>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg">
            Hours of Operation
          </Heading>
          <Text>Monday - Thursday: 11:00 AM - 9:00 PM</Text>
          <Text>Friday - Saturday: 11:00 AM - 10:00 PM</Text>
          <Text>Sunday: Closed</Text>
        </VStack>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg">
            Location
          </Heading>
          <Box w="100%" h="400px">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "8px" }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=910+Chestnut+St+Coplay,+PA+18037`}
              allowFullScreen
            ></iframe>
          </Box>
        </VStack>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg">
            Why Visit Us?
          </Heading>
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/authentic-thai-food"
                alt="Authentic Thai Food"
                width="200px"
                height="150px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={2}>Authentic Thai Cuisine</Text>
            </Box>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/cozy-atmosphere"
                alt="Cozy Atmosphere"
                width="200px"
                height="150px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={2}>Cozy Atmosphere</Text>
            </Box>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/vegetarian-options"
                alt="Vegetarian Options"
                width="200px"
                height="150px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={2}>Vegetarian Options</Text>
            </Box>
          </HStack>
        </VStack>

        <Divider />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg">
            Explore More
          </Heading>
          <HStack spacing={4} justify="center">
            <Link href="/" color="teal.500">
              Home
            </Link>
            <Link href="/menu" color="teal.500">
              Menu
            </Link>
            <Link href="/about" color="teal.500">
              About Us
            </Link>
            <Link href="/contact" color="teal.500">
              Contact
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Visit;