import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Button, Stack, Tag, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaJava, FaReact } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useBreakpointValue } from '@chakra-ui/react'

const MotionBox = motion(Box)

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const projects = [
    {
      title: 'ChimeraEventBus',
      description: 'EventSystem for registering events, with a priority system, caching and ease of use.',
      technologies: ['Java'],
      link: 'https://github.com/FelixH2012/ChimeraEventBus',
      icon: FaJava
    },
    {
      title: 'SongSync',
      description: 'Download songs from YouTube and set them to a consistent volume using ffmpeg.',
      technologies: ['JavaScript', 'Node.js'],
      link: 'https://github.com/FelixH2012/SongSync',
      icon: SiJavascript
    },
    {
      title: 'Personal Website',
      description: 'My personal portfolio website built with React and Chakra UI.',
      technologies: ['React', 'TypeScript', 'Chakra UI'],
      link: 'https://github.com/FelixH2012/MiloWebsite',
      icon: FaReact
    }
  ]

  return (
    <Box 
      as="main" 
      w="100vw"
      minH="100vh"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      sx={{ cursor: 'auto' }}
    >
      {/* Hero Section */}
      <Box
        w="100%"
        flex="1"
        display="flex"
        alignItems="center"
        position="relative"
        mt={{ base: 20, md: 32 }}
        _before={{
          content: '""',
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '250%',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(147, 112, 219, 0.15) 0%, transparent 70%)',
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      >
        <Container maxW="container.xl">
          <Stack spacing={8} w="100%">
            <Heading
              as="h1"
              fontSize={{ base: "4rem", md: "7rem", lg: "9rem" }}
              lineHeight={{ base: "0.9", md: "0.8" }}
              fontWeight="bold"
              letterSpacing="-3px"
              bgGradient="linear(to-r, white, rgba(147, 112, 219, 0.5))"
              bgClip="text"
            >
              PROJECTS
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              maxW="2xl"
            >
              A collection of my personal projects and contributions.
              Each project represents a unique challenge and learning experience.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box w="100%" py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((project) => (
              <Card key={project.title}>
                <CardBody>
                  <Stack spacing={6}>
                    <HStack spacing={4}>
                      <Icon as={project.icon} boxSize={6} />
                      <Heading
                        as="h3"
                        fontSize={{ base: "xl", md: "2xl" }}
                      >
                        {project.title}
                      </Heading>
                    </HStack>
                    <Text>{project.description}</Text>
                    <HStack spacing={2}>
                      {project.technologies.map((tech) => (
                        <Tag key={tech} variant="outline" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                    <Button
                      as="a"
                      href={project.link}
                      target="_blank"
                      variant="outline"
                      leftIcon={<FaGithub />}
                    >
                      View on GitHub
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}

export default Projects 