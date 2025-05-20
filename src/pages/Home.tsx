import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Button, Stack, Flex, Progress } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaJava, FaReact, FaPhp } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si'
import { Helmet } from 'react-helmet'
import { keyframes } from '@emotion/react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionBox = motion(Box)

const Home = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  `

  const skills = [
    { name: 'Java', icon: FaJava, level: 90 },
    { name: 'Kotlin', icon: SiKotlin, level: 85 },
    { name: 'React', icon: FaReact, level: 80 },
    { name: 'JavaScript', icon: SiJavascript, level: 85 },
    { name: 'TypeScript', icon: SiTypescript, level: 75 },
    { name: 'PHP', icon: FaPhp, level: 70 },
  ]

  return (
    <>
      <Helmet>
        <link href="https://use.typekit.net/[YOUR-KIT-CODE].css" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Felix Hans",
            "alternateName": "felix1337",
            "url": "https://felix1337.tech",
            "sameAs": [
              "https://github.com/FelixH2012",
              "https://felix1337.tech"
            ],
            "jobTitle": "Apprentice Software Developer",
            "knowsAbout": ["Java", "Kotlin", "React", "JavaScript", "TypeScript", "PHP", "Music Production", "Chess"],
            "description": "17-year-old apprentice software developer with over three years of Java experience. Currently training as an application developer, passionate about chess and music production."
          })}
        </script>
      </Helmet>

      <Box 
        as="main" 
        w="100vw"
        minH="100vh"
        display="flex"
        flexDirection="column"
        overflow="hidden"
        bg="black"
      >
        {/* Hero Section */}
        <Box
          w="100%"
          flex="1"
          display="flex"
          alignItems="center"
          position="relative"
          mt={{ base: 20, md: 32 }}
          mb={{ base: 16, md: 24 }}
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
                FELIX
                <br />
                HANS
              </Heading>
              <Stack 
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                maxW={{ base: "full", sm: "320px" }}
              >
                <Button
                  as="a"
                  href="https://github.com/FelixH2012"
                  target="_blank"
                  leftIcon={<FaGithub />}
                  size="lg"
                >
                  GitHub
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/felix-hans-a14508324?originalSubdomain=de"
                  target="_blank"
                  variant="outline"
                  leftIcon={<FaLinkedin />}
                  size="lg"
                >
                  LinkedIn
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Image Section */}
        <Box 
          w="100%" 
          py={32}
          position="relative"
          bg="blackAlpha.50"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            bg: 'whiteAlpha.100'
          }}
        >
          <Container maxW="container.xl">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="center"
              gap={{ base: 8, md: 16 }}
            >
              {/* Image Container */}
              <Box 
                position="relative" 
                width={{ base: "280px", md: "380px" }}
                height={{ base: "350px", md: "480px" }}
                animation={`${fadeIn} 1s ease-out`}
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="whiteAlpha.100"
                  transform="rotate(-2deg)"
                />
                {/* Image */}
                <Box
                  as="img"
                  src="/foto.webp"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  objectPosition="center top"
                  position="relative"
                  filter="grayscale(100%)"
                  transition="all 0.4s ease"
                  _hover={{
                    filter: "grayscale(0%)",
                    transform: "scale(1.02)"
                  }}
                />
              </Box>

              {/* Text Content */}
              <Box
                maxW="300px"
                animation={`${fadeIn} 1s ease-out 0.2s`}
                opacity="0"
                style={{ animationFillMode: 'forwards' }}
              >
                <Text
                  fontSize="sm"
                  fontFamily="mono"
                  color="whiteAlpha.700"
                  mb={4}
                >
                  // about
                </Text>
                <Text
                  fontSize="lg"
                  lineHeight="tall"
                  color="whiteAlpha.900"
                >
                  Passionate about creating elegant solutions to complex problems. When I'm not coding, you'll find me producing music or playing chess.
                </Text>
                <Box
                  mt={6}
                  h="1px"
                  w="40px"
                  bg="purple.400"
                  opacity={0.5}
                />
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box 
          w="100%" 
          py={20}
          position="relative"
          bg="transparent"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            bg: 'whiteAlpha.100'
          }}
        >
          <Container maxW="container.xl" position="relative" zIndex={2}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={12}
              color="white"
            >
              Technologies
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {skills.map((skill, index) => (
                <MotionBox
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Flex align="center" mb={2}>
                    <Box as={skill.icon} size="24px" mr={3} color="white" />
                    <Text fontWeight="medium" color="white">{skill.name}</Text>
                  </Flex>
                  <Progress 
                    value={skill.level} 
                    size="sm" 
                    bg="whiteAlpha.100"
                    sx={{
                      '& > div': {
                        background: 'white'
                      }
                    }}
                    borderRadius="full"
                    hasStripe
                    isAnimated
                  />
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Projects Section with Parallax */}
        <Box 
          w="100%" 
          py={20}
          position="relative"
          overflow="visible"
        >
          {/* Continuous Gradient Background */}
          <MotionBox
            position="absolute"
            top="-50%"
            left="0"
            right="0"
            height="200%"
            style={{ y }}
            bgGradient="radial(circle at 50% 50%, rgba(147, 112, 219, 0.15), transparent 70%)"
            pointerEvents="none"
            zIndex={1}
          />
          
          <Container maxW="container.xl" position="relative" zIndex={2}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={12}
              color="white"
            >
              Featured Projects
            </Heading>
            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              spacing={8}
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card bg="whiteAlpha.100" borderColor="whiteAlpha.200" borderWidth="1px">
                  <CardBody>
                    <Stack spacing={4}>
                      <Heading
                        as="h3"
                        fontSize={{ base: "xl", md: "2xl" }}
                        color="white"
                      >
                        ChimeraEventBus
                      </Heading>
                      <Text 
                        fontSize="md"
                        lineHeight="1.6"
                        color="whiteAlpha.900"
                      >
                        EventSystem for registering events, with a priority system, 
                        caching and ease of use.
                      </Text>
                      <Button 
                        as="a"
                        href="https://github.com/FelixH2012/ChimeraEventBus"
                        target="_blank"
                        variant="outline"
                        size="lg"
                        color="white"
                        borderColor="white"
                        _hover={{
                          bg: 'whiteAlpha.200'
                        }}
                      >
                        View Project
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card bg="whiteAlpha.100" borderColor="whiteAlpha.200" borderWidth="1px">
                  <CardBody>
                    <Stack spacing={4}>
                      <Heading
                        as="h3"
                        fontSize={{ base: "xl", md: "2xl" }}
                        color="white"
                      >
                        SongSync
                      </Heading>
                      <Text 
                        fontSize="md"
                        lineHeight="1.6"
                        color="whiteAlpha.900"
                      >
                        Download songs from YouTube and set them to a consistent volume 
                        using ffmpeg.
                      </Text>
                      <Button 
                        as="a"
                        href="https://github.com/FelixH2012/SongSync"
                        target="_blank"
                        variant="outline"
                        size="lg"
                        color="white"
                        borderColor="white"
                        _hover={{
                          bg: 'whiteAlpha.200'
                        }}
                      >
                        View Project
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              </MotionBox>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home