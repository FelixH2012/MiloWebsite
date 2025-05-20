import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiPieChart, FiTrendingUp, FiAward, FiActivity, FiHeart, FiClock } from 'react-icons/fi'

const MotionBox = motion(Box)

const FeatureCard = ({ icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    layerStyle="glass"
    p={8}
    cursor="pointer"
  >
    <VStack spacing={4} align="flex-start">
      <Icon as={icon} boxSize={6} color="brand.accent" />
      <Heading size="md">{title}</Heading>
      <Text color="whiteAlpha.800">{description}</Text>
    </VStack>
  </MotionBox>
)

const Features = () => {

  const features = [
    {
      icon: FiPieChart,
      title: "Nutrition Analytics",
      description: "Get detailed breakdowns of your macro and micronutrients with beautiful visualizations."
    },
    {
      icon: FiTrendingUp,
      title: "Progress Tracking",
      description: "Monitor your progress over time with comprehensive charts and insights."
    },
    {
      icon: FiAward,
      title: "Achievement System",
      description: "Stay motivated with our gamified system that rewards your consistency and progress."
    },
    {
      icon: FiActivity,
      title: "Activity Monitoring",
      description: "Track your daily activities and see how they impact your overall health goals."
    },
    {
      icon: FiHeart,
      title: "Health Insights",
      description: "Receive personalized health insights based on your nutrition and activity data."
    },
    {
      icon: FiClock,
      title: "Meal Planning",
      description: "Plan your meals ahead with our smart meal planning and scheduling system."
    }
  ]

  return (
    <Box as="main" pt={{ base: 32, md: 40 }} pb={20}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Hero Section */}
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
                Powerful Features
              </Heading>
              <Text
                fontSize="xl"
                color="whiteAlpha.900"
                maxW="container.md"
                mx="auto"
              >
                Everything you need to track your nutrition and achieve your health goals,
                all in one beautiful interface.
              </Text>
            </MotionBox>
          </Box>

          {/* Features Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            w="full"
          >
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Stats Section */}
          <Box layerStyle="glass" p={10} w="full">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <VStack>
                <Heading size="2xl" bgGradient="brand.gradient" bgClip="text">24/7</Heading>
                <Text color="whiteAlpha.800">Real-time Tracking</Text>
              </VStack>
              <VStack>
                <Heading size="2xl" bgGradient="brand.gradient" bgClip="text">100+</Heading>
                <Text color="whiteAlpha.800">Data Insights</Text>
              </VStack>
              <VStack>
                <Heading size="2xl" bgGradient="brand.gradient" bgClip="text">99%</Heading>
                <Text color="whiteAlpha.800">Accuracy</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Features 