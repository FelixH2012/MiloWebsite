import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Button, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FaGithub, FaLinkedin, FaJava, FaReact, FaPhp } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)
const MotionContainer = motion(Container)

// Enhanced noise animation
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

// Glitch animation
const glitchAnim = keyframes`
  0% { clip: rect(44px, 9999px, 56px, 0) }
  5% { clip: rect(12px, 9999px, 76px, 0) }
  10% { clip: rect(54px, 9999px, 98px, 0) }
  15% { clip: rect(23px, 9999px, 67px, 0) }
  20% { clip: rect(89px, 9999px, 34px, 0) }
  25% { clip: rect(12px, 9999px, 78px, 0) }
  30% { clip: rect(92px, 9999px, 23px, 0) }
  35% { clip: rect(45px, 9999px, 88px, 0) }
  40% { clip: rect(34px, 9999px, 12px, 0) }
  45% { clip: rect(67px, 9999px, 45px, 0) }
  50% { clip: rect(89px, 9999px, 23px, 0) }
`

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const isMobile = useBreakpointValue({ base: true, md: false })
  
  const skills = [
    { name: 'JAVA', icon: FaJava },
    { name: 'KOTLIN', icon: SiKotlin },
    { name: 'REACT', icon: FaReact },
    { name: 'JAVASCRIPT', icon: SiJavascript },
    { name: 'TYPESCRIPT', icon: SiTypescript },
    { name: 'PHP', icon: FaPhp },
  ]

  // Parallax effect for scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offset = isMobile ? 2 : 5
      setMousePosition({ x: moveX / offset, y: moveY / offset })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

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
        minH="100vh"
        bg="black"
        position="relative"
        overflow="hidden"
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
            zIndex: 0,
          }
        }}
      >
        <MotionContainer 
          maxW="container.xl" 
          pt={{ base: 20, md: 32 }} 
          pb={20}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ y, opacity }}
          position="relative"
          zIndex={1}
        >
          <Grid 
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
            gap={{ base: 4, md: 8 }}
            templateAreas={{
              base: `"intro"
                     "skills"`,
              md: `"intro skills"`
            }}
          >
            <GridItem area="intro">
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transform: !isMobile ? `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)` : 'none',
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                position="relative"
                zIndex={2}
              >
                <Text 
                  textTransform="uppercase" 
                  letterSpacing="3px" 
                  mb={4}
                  fontSize={{ base: "sm", md: "md" }}
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
                  size={{ base: "xl", md: "2xl" }}
                  mb={6}
                  lineHeight="1.2"
                  fontSize={{ base: "2.5rem", md: "4rem" }}
                  position="relative"
                  zIndex={2}
                  sx={{
                    'span': {
                      display: 'block',
                      position: 'relative',
                      color: 'white',
                      '&::before': {
                        content: 'attr(data-text)',
                        position: 'absolute',
                        left: '2px',
                        textShadow: '-2px 0 white',
                        background: 'black',
                        overflow: 'hidden',
                        animation: `${glitchAnim} 3s infinite linear alternate-reverse`,
                        width: '100%',
                      }
                    }
                  }}
                >
                  <span data-text="FELIX">&gt; FELIX</span>
                  <span data-text="HANS">&gt; HANS</span>
                </Heading>
                <Text 
                  fontSize={{ base: "md", md: "lg" }}
                  color="whiteAlpha.800" 
                  maxW="md" 
                  mb={8}
                  position="relative"
                  zIndex={2}
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
                  position="relative"
                  zIndex={2}
                >
                  <Button
                    as="a"
                    href="https://github.com/FelixH2012"
                    target="_blank"
                    leftIcon={<FaGithub />}
                    mr={4}
                    size={{ base: "sm", md: "md" }}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    transition="all 0.2s"
                  >
                    GitHub::Connect
                  </Button>
                  <Button
                    as="a"
                    href="#"
                    target="_blank"
                    variant="outline"
                    leftIcon={<FaLinkedin />}
                    size={{ base: "sm", md: "md" }}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    transition="all 0.2s"
                  >
                    LinkedIn::Access
                  </Button>
                </MotionBox>
              </MotionBox>
            </GridItem>
            <GridItem area="skills">
              <MotionGrid
                templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                gap={{ base: 2, md: 4 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                position="relative"
                zIndex={1}
              >
                {skills.map((skill, index) => (
                  <MotionGridItem
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card 
                      h="full" 
                      position="relative"
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      <CardBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={4}
                      >
                        <Box
                          as={skill.icon}
                          boxSize={{ base: "1.5rem", md: "2rem" }}
                          color="white"
                        />
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
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

          <Box mt={{ base: 12, md: 20 }}>
            <Heading 
              as="h2" 
              size={{ base: "lg", md: "xl" }} 
              mb={{ base: 8, md: 12 }}
              textAlign={{ base: "center", md: "left" }}
            >
              FEATURED::PROJECTS
            </Heading>
            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              spacing={{ base: 4, md: 8 }}
            >
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.2s"
                >
                  <CardBody>
                    <Text
                      color="whiteAlpha.600"
                      fontSize={{ base: "xs", md: "sm" }}
                      letterSpacing="2px"
                      textTransform="uppercase"
                      mb={4}
                    >
                      &gt; ChimeraEventBus
                    </Text>
                    <Text 
                      color="whiteAlpha.800" 
                      mb={4}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      EventSystem for registering events, with a priority system, 
                      caching and ease of use.
                    </Text>
                    <Button 
                      as="a"
                      href="https://github.com/FelixH2012/ChimeraEventBus"
                      target="_blank"
                      variant="outline"
                      size={{ base: "sm", md: "md" }}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      VIEW::SOURCE
                    </Button>
                  </CardBody>
                </Card>
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.2s"
                >
                  <CardBody>
                    <Text
                      color="whiteAlpha.600"
                      fontSize={{ base: "xs", md: "sm" }}
                      letterSpacing="2px"
                      textTransform="uppercase"
                      mb={4}
                    >
                      &gt; SongSync
                    </Text>
                    <Text 
                      color="whiteAlpha.800" 
                      mb={4}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      Download songs from YouTube and set them to a consistent volume 
                      using ffmpeg.
                    </Text>
                    <Button 
                      as="a"
                      href="https://github.com/FelixH2012/SongSync"
                      target="_blank"
                      variant="outline"
                      size={{ base: "sm", md: "md" }}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      VIEW::SOURCE
                    </Button>
                  </CardBody>
                </Card>
              </MotionBox>
            </SimpleGrid>
          </Box>
        </MotionContainer>
      </Box>
    </>
  )
}

export default Home 