import { FaGithub, FaLinkedin, FaJava, FaReact, FaPhp } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si'
import { Button, Box, VisuallyHidden } from '@chakra-ui/react'

interface IconsProps {
  name?: string;
}

const Icons = ({ name }: IconsProps) => {
  const iconMap = {
    FaJava,
    SiKotlin,
    FaReact,
    SiJavascript,
    SiTypescript,
    FaPhp
  }

  if (name) {
    const Icon = iconMap[name as keyof typeof iconMap]
    return (
      <Box 
        as={Icon} 
        size="24px" 
        color="white" 
        role="img"
        aria-hidden="true"
      />
    )
  }

  return (
    <>
      <Button
        as="a"
        href="https://github.com/FelixH2012"
        target="_blank"
        rel="noopener noreferrer"
        leftIcon={<Box as={FaGithub} aria-hidden="true" />}
        size="lg"
        aria-label="GitHub Profil öffnen"
      >
        <VisuallyHidden>GitHub</VisuallyHidden>
        GitHub
      </Button>
      <Button
        as="a"
        href="https://www.linkedin.com/in/felix-hans-a14508324?originalSubdomain=de"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        leftIcon={<Box as={FaLinkedin} aria-hidden="true" />}
        size="lg"
        aria-label="LinkedIn Profil öffnen"
      >
        <VisuallyHidden>LinkedIn</VisuallyHidden>
        LinkedIn
      </Button>
    </>
  )
}

export default Icons 