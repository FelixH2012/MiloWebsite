import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Button, Grid, GridItem } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FaGithub, FaLinkedin, FaJava, FaReact, FaPhp } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

// Custom noise animation
const noiseAnim = keyframes`
  0% { transform: translate(0,0) }
  10% { transform: translate(-5%,-5%) }
  20% { transform: translate(-10%,5%) }
  30% { transform: translate(5%,-10%) }
  40% { transform: translate(-5%,15%) }
  50% { transform: translate(-10%,5%) }
  60% { transform: translate(15%,0) }
  70% { transform: translate(0,10%) }
  80% { transform: translate(-15%,0) }
  90% { transform: translate(10%,5%) }
  100% { transform: translate(5%,0) }
`

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const skills = [
    { name: 'JAVA', icon: FaJava },
    { name: 'KOTLIN', icon: SiKotlin },
    { name: 'REACT', icon: FaReact },
    { name: 'JAVASCRIPT', icon: SiJavascript },
    { name: 'TYPESCRIPT', icon: SiTypescript },
    { name: 'PHP', icon: FaPhp },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offset = 5
      setMousePosition({ x: moveX / offset, y: moveY / offset })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Helmet>
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
            "jobTitle": "Fullstack Web Developer",
            "knowsAbout": ["Java", "Kotlin", "React", "JavaScript", "TypeScript", "PHP"],
            "description": "Fullstack Web Developer with over three years of Java experience. Currently finishing high school and passionate about chess."
          })}
        </script>
      </Helmet>
      <Box 
        as="main" 
        sx={{
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
            opacity: 0.05,
            animation: `${noiseAnim} 1s steps(2) infinite`,
            pointerEvents: 'none',
            zIndex: -1,
          }
        }}
      >
        <Container maxW="container.xl" pt={32} pb={20}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`,
                }}
                transition={{ duration: 0.5 }}
              >
                <Text 
                  textTransform="uppercase" 
                  letterSpacing="3px" 
                  mb={4}
                  color="whiteAlpha.700"
                  position="relative"
                  display="inline-block"
                  _after={{
                    content: '"SYSTEM.INIT"',
                    position: 'absolute',
                    left: '0',
                    color: 'rgba(255,255,255,0.1)',
                    transform: 'translateX(-10px)',
                  }}
                >
                  EXECUTE: profile.load()
                </Text>
                <Heading 
                  as="h1" 
                  size="2xl" 
                  mb={6}
                  lineHeight="1.2"
                  sx={{
                    'span': {
                      display: 'block',
                      position: 'relative',
                      '&::before': {
                        content: 'attr(data-text)',
                        position: 'absolute',
                        left: '2px',
                        textShadow: '-2px 0 white',
                        background: 'black',
                        overflow: 'hidden',
                        clip: 'rect(0,900px,0,0)',
                        animation: 'glitch 2s infinite linear alternate-reverse',
                      }
                    }
                  }}
                >
                  <span data-text="FELIX">&gt; FELIX</span>
                  <span data-text="HANS">&gt; HANS</span>
                </Heading>
                <Text 
                  fontSize="lg" 
                  color="whiteAlpha.800" 
                  maxW="md" 
                  mb={8}
                  sx={{
                    '&::before': {
                      content: '"> "',
                      color: 'white',
                    }
                  }}
                >
                  Fullstack Web Developer with over three years of Java experience.
                  Currently finishing high school and passionate about chess.
                </Text>
                <MotionBox
                  initial={false}
                  animate={{
                    x: mousePosition.x * 0.1,
                    y: mousePosition.y * 0.1,
                  }}
                >
                  <Button
                    as="a"
                    href="https://github.com/FelixH2012"
                    target="_blank"
                    leftIcon={<FaGithub />}
                    mr={4}
                  >
                    GitHub::Connect
                  </Button>
                  <Button
                    as="a"
                    href="#"
                    target="_blank"
                    variant="outline"
                    leftIcon={<FaLinkedin />}
                  >
                    LinkedIn::Access
                  </Button>
                </MotionBox>
              </MotionBox>
            </GridItem>
            <GridItem>
              <MotionGrid
                templateColumns="repeat(3, 1fr)"
                gap={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {skills.map((skill, index) => (
                  <MotionGridItem
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card h="full" position="relative">
                      <CardBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={4}
                      >
                        <Box
                          as={skill.icon}
                          boxSize="2rem"
                          color="white"
                        />
                        <Text
                          fontSize="sm"
                          textTransform="uppercase"
                          letterSpacing="1px"
                          textAlign="center"
                        >
                          {skill.name}
                        </Text>
                      </CardBody>
                    </Card>
                  </MotionGridItem>
                ))}
              </MotionGrid>
            </GridItem>
          </Grid>

          <Box mt={20}>
            <Heading as="h2" size="xl" mb={12}>
              FEATURED::PROJECTS
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Card>
                <CardBody>
                  <Text
                    color="whiteAlpha.600"
                    fontSize="sm"
                    letterSpacing="2px"
                    textTransform="uppercase"
                    mb={4}
                  >
                    &gt; ChimeraEventBus
                  </Text>
                  <Text color="whiteAlpha.800" mb={4}>
                    EventSystem for registering events, with a priority system, 
                    caching and ease of use.
                  </Text>
                  <Button 
                    as="a"
                    href="https://github.com/FelixH2012/ChimeraEventBus"
                    target="_blank"
                    variant="outline"
                  >
                    VIEW::SOURCE
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Text
                    color="whiteAlpha.600"
                    fontSize="sm"
                    letterSpacing="2px"
                    textTransform="uppercase"
                    mb={4}
                  >
                    &gt; SongSync
                  </Text>
                  <Text color="whiteAlpha.800" mb={4}>
                    Download songs from YouTube and set them to a consistent volume 
                    using ffmpeg.
                  </Text>
                  <Button 
                    as="a"
                    href="https://github.com/FelixH2012/SongSync"
                    target="_blank"
                    variant="outline"
                  >
                    VIEW::SOURCE
                  </Button>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Home 