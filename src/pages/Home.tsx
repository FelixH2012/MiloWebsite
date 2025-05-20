import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaJava, FaReact, FaPhp } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const inverterRef = useRef<HTMLDivElement>(null)
  const isMobile = useBreakpointValue({ base: true, md: false })
  
  const skills = [
    { name: 'Java', icon: FaJava },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'React', icon: FaReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'PHP', icon: FaPhp },
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

      {!isMobile && (
        <>
          <Box ref={cursorRef} className="custom-cursor" />
          <Box ref={cursorDotRef} className="cursor-dot" />
          <Box ref={inverterRef} className="invert-circle" />
        </>
      )}

      <Box 
        as="main" 
        w="100vw"
        minH="100vh"
        display="flex"
        flexDirection="column"
        overflow="hidden"
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
                FELIX
                <br />
                HANS
              </Heading>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="2xl"
              >
                17-year-old apprentice software developer with over three years of Java experience.
                Currently training as an application developer, passionate about chess and music production.
              </Text>
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

        {/* Content Sections */}
        <Box w="100%" py={20}>
          <Container maxW="container.xl">
            <Stack spacing={20} w="100%">
              {/* Skills Section */}
              <Box w="100%">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={8}
                >
                  Technologies
                </Heading>
                <SimpleGrid
                  columns={{ base: 2, sm: 3, md: 6 }}
                  spacing={{ base: 4, md: 6 }}
                >
                  {skills.map((skill) => (
                    <Card key={skill.name}>
                      <CardBody>
                        <Stack align="center" spacing={4}>
                          <Box
                            as={skill.icon}
                            boxSize={{ base: 8, md: 10 }}
                          />
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {skill.name}
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>

              {/* Projects Section */}
              <Box w="100%">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={8}
                >
                  Featured Projects
                </Heading>
                <SimpleGrid 
                  columns={{ base: 1, md: 2 }} 
                  spacing={8}
                >
                  <Card>
                    <CardBody>
                      <Stack spacing={4}>
                        <Heading
                          as="h3"
                          fontSize={{ base: "xl", md: "2xl" }}
                        >
                          ChimeraEventBus
                        </Heading>
                        <Text 
                          fontSize="md"
                          lineHeight="1.6"
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
                        >
                          View Project
                        </Button>
                      </Stack>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <Stack spacing={4}>
                        <Heading
                          as="h3"
                          fontSize={{ base: "xl", md: "2xl" }}
                        >
                          SongSync
                        </Heading>
                        <Text 
                          fontSize="md"
                          lineHeight="1.6"
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
                        >
                          View Project
                        </Button>
                      </Stack>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home 