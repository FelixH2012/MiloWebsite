import { Box, Container, Heading, Text, Button, SimpleGrid, Icon, VStack, Circle } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiActivity, FiPieChart, FiTrendingUp } from 'react-icons/fi'

const MotionBox = motion(Box)

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <VStack spacing={1} align="center">
    <Circle
      size={{ base: "120px", md: "140px", lg: "160px" }}
      border="2px solid"
      borderColor="brand.blue"
      position="relative"
    >
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">{value}</Text>
    </Circle>
    <Text color="whiteAlpha.800" fontSize="sm">{label}</Text>
  </VStack>
)

const FeatureCard = ({ icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <Box
    bg="rgba(17, 25, 40, 0.8)"
    borderRadius="xl"
    p={6}
    transition="all 0.2s"
    _hover={{ bg: 'rgba(17, 25, 40, 0.9)' }}
  >
    <VStack spacing={4} align="flex-start">
      <Icon as={icon} boxSize={6} color="brand.blue" />
      <Heading size="md">{title}</Heading>
      <Text fontSize="sm" color="whiteAlpha.800">{description}</Text>
    </VStack>
  </Box>
)

const Home = () => {
  return (
    <Box as="main" minH="100vh">
      <Container  pb={20}>
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {/* Hero Section */}
          <VStack spacing={6} align="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              textAlign="center"
              w="full"
            >
              <Heading
                as="h1"
                size="2xl"
                bgGradient="brand.gradient"
                bgClip="text"
                mb={4}
              >
                Track Your Nutrition
                <br />
                With Precision
              </Heading>
              <Text
                fontSize="lg"
                maxW="md"
                mx="auto"
                mb={8}
                color="whiteAlpha.800"
              >
                Monitor your daily nutrition intake with beautiful visualizations
                and detailed insights to help you reach your health goals.
              </Text>
              <Button size="lg">
                Start Tracking
              </Button>
            </MotionBox>
          </VStack>

          {/* Stats Section */}
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            spacing={{ base: 8, md: 4 }}
            justifyItems="center"
            maxW="3xl"
            mx="auto"
            w="full"
          >
            <StatCard value="1,955" label="kcal today" />
            <StatCard value="43g" label="protein" />
            <StatCard value="209g" label="carbs" />
          </SimpleGrid>

          {/* Features Section */}
          <VStack spacing={8} align="stretch">
            <Heading size="lg" textAlign="center">Key Features</Heading>
            <SimpleGrid 
              columns={{ base: 1, md: 3 }} 
              spacing={6}
              maxW="4xl"
              mx="auto"
              w="full"
            >
              <FeatureCard
                icon={FiPieChart}
                title="Nutrition Tracking"
                description="Track your macros and calories with our intuitive interface."
              />
              <FeatureCard
                icon={FiTrendingUp}
                title="Progress Analytics"
                description="View detailed charts and insights about your nutrition habits."
              />
              <FeatureCard
                icon={FiActivity}
                title="Activity Monitoring"
                description="Connect with your fitness apps to get a complete health picture."
              />
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 