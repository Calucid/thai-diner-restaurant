import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, Textarea, VStack, Link, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image 
            src="http://stock.calucid.com/fetch/calucid/thai-diner-restaurant/location" 
            alt="Thai Diner Restaurant Location" 
            width="100%" 
            height="250px" 
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>Contact Thai Diner Restaurant</Text>
          <Text>910 Chestnut St, Coplay, PA 18037</Text>
          <Text>(610) 440-2668</Text>
          <Text>Email: <Link href="mailto:contact@thaidiner.com" color="orange.500">contact@thaidiner.com</Link></Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold">Follow Us</Text>
          <HStack spacing={4}>
            <IconButton as={Link} href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton as={Link} href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </HStack>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold">Send Us a Message</Text>
          <form>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button colorScheme="orange" type="submit">Send Message</Button>
            </Stack>
          </form>
        </Box>

        <Box textAlign="center">
          <Text fontSize="xl" fontWeight="bold">Explore More</Text>
          <HStack justify="center" spacing={4}>
            <Link as={RouterLink} to="/" color="orange.500">Home</Link>
            <Link as={RouterLink} to="/about" color="orange.500">About</Link>
            <Link as={RouterLink} to="/menu" color="orange.500">Menu</Link>
            <Link as={RouterLink} to="/visit" color="orange.500">Visit</Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;