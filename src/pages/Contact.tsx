import { Box, Container, Heading, Text, Stack, Button, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
const Contact = () => {

  const contactMethods = [
    {
      name: 'GitHub',
      icon: FaGithub,
      link: 'https://github.com/FelixH2012',
      description: 'Check out my open source projects and contributions'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      link: 'mailto:felixhans2007@gmail.com',
      description: 'Send me an email at felixhans2007@gmail.com'
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      link: '#',
      description: 'Chat with me on Discord: felix1337'
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
              CONTACT
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              maxW="2xl"
            >
              Let's connect! Whether you want to discuss a project, talk about technology,
              or just say hi - I'm always open to new conversations.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Contact Methods */}
      <Box w="100%" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={8}>
            {contactMethods.map((method) => (
              <Box
                key={method.name}
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                p={8}
                _hover={{
                  borderColor: 'white',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
                <Stack spacing={4}>
                  <HStack spacing={4}>
                    <Icon as={method.icon} boxSize={6} />
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", md: "2xl" }}
                    >
                      {method.name}
                    </Heading>
                  </HStack>
                  <Text>{method.description}</Text>
                  <Button
                    as="a"
                    href={method.link}
                    target="_blank"
                    variant="outline"
                    alignSelf="flex-start"
                    leftIcon={<Icon as={method.icon} />}
                  >
                    Connect on {method.name}
                  </Button>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact 