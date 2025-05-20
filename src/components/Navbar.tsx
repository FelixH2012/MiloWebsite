import { Box, Container, Flex, Link, Button, useDisclosure, IconButton, VStack } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      position="relative"
      color={isActive ? 'white' : 'whiteAlpha.800'}
      _hover={{ color: 'white', textDecoration: 'none' }}
    >
      {children}
      {isActive && (
        <MotionBox
          layoutId="activeNav"
          position="absolute"
          bottom="-1px"
          left={0}
          right={0}
          height="2px"
          bgGradient="brand.gradient"
          initial={false}
        />
      )}
    </Link>
  )
}

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  
  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="glass.border"
    >
      <Container>
        <Flex h={16} align="center" justify="space-between">
          <Link
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            bgGradient="brand.gradient"
            bgClip="text"
            _hover={{ textDecoration: 'none' }}
          >
            Milo
          </Link>

          {/* Desktop Navigation */}
          <Flex
            display={{ base: 'none', md: 'flex' }}
            align="center"
            gap={8}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/about">About</NavLink>
            <Button size="sm">
              Get Started
            </Button>
          </Flex>

          {/* Mobile Navigation Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* Mobile Navigation Menu */}
        <VStack
          display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
          py={4}
          spacing={4}
          align="stretch"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button w="full">
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default Navbar 