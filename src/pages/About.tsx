import { Box, Container, Heading, Text, SimpleGrid, VStack, Avatar, Button, Icon, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const MotionBox = motion(Box)

const TeamMember = ({ name, role, image, social }: { 
  name: string; 
  role: string; 
  image: string;
  social: { github?: string; twitter?: string; linkedin?: string; }
}) => (
  <MotionBox
    whileHover={{ y: -5 }}
    layerStyle="glass"
    p={8}
    textAlign="center"
  >
    <VStack spacing={4}>
      <Avatar size="xl" name={name} src={image} />
      <Box>
        <Heading size="md">{name}</Heading>
        <Text color="whiteAlpha.800">{role}</Text>
      </Box>
      <HStack spacing={4}>
        {social.github && (
          <Button as="a" href={social.github} variant="ghost" size="sm">
            <Icon as={FiGithub} />
          </Button>
        )}
        {social.twitter && (
          <Button as="a" href={social.twitter} variant="ghost" size="sm">
            <Icon as={FiTwitter} />
          </Button>
        )}
        {social.linkedin && (
          <Button as="a" href={social.linkedin} variant="ghost" size="sm">
            <Icon as={FiLinkedin} />
          </Button>
        )}
      </HStack>
    </VStack>
  </MotionBox>
)

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "/team/alex.jpg",
      social: {
        github: "https://github.com/alexchen",
        twitter: "https://twitter.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "/team/sarah.jpg",
      social: {
        github: "https://github.com/sarahj",
        twitter: "https://twitter.com/sarahj",
        linkedin: "https://linkedin.com/in/sarahj"
      }
    },
    {
      name: "Michael Lee",
      role: "Tech Lead",
      image: "/team/michael.jpg",
      social: {
        github: "https://github.com/michaellee",
        twitter: "https://twitter.com/michaellee",
        linkedin: "https://linkedin.com/in/michaellee"
      }
    }
  ]

  return (
    <Box as="main" pt={{ base: 32, md: 40 }} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={20}>
          {/* Mission Section */}
          <Box textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                as="h1"
                size="3xl"
                bgGradient="brand.gradient"
                bgClip="text"
                letterSpacing="tight"
                mb={6}
              >
                Our Mission
              </Heading>
              <Text
                fontSize="xl"
                color="whiteAlpha.900"
                maxW="container.md"
                mx="auto"
              >
                We're on a mission to revolutionize how people track and understand their nutrition.
                By combining beautiful design with powerful analytics, we make health tracking
                not just easy, but enjoyable.
              </Text>
            </MotionBox>
          </Box>

          {/* Values Section */}
          <Box layerStyle="glass" p={10} w="full">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <VStack>
                <Heading size="xl" bgGradient="brand.gradient" bgClip="text">Innovation</Heading>
                <Text color="whiteAlpha.800" textAlign="center">
                  Pushing boundaries in nutrition tracking technology
                </Text>
              </VStack>
              <VStack>
                <Heading size="xl" bgGradient="brand.gradient" bgClip="text">Simplicity</Heading>
                <Text color="whiteAlpha.800" textAlign="center">
                  Making complex health data beautifully simple
                </Text>
              </VStack>
              <VStack>
                <Heading size="xl" bgGradient="brand.gradient" bgClip="text">Impact</Heading>
                <Text color="whiteAlpha.800" textAlign="center">
                  Empowering healthier lives through better insights
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>

          {/* Team Section */}
          <Box w="full">
            <Heading
              textAlign="center"
              size="2xl"
              bgGradient="brand.gradient"
              bgClip="text"
              mb={12}
            >
              Meet Our Team
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={8}
            >
              {team.map((member, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamMember {...member} />
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default About 