import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

interface NavLinkProps {
  children: React.ReactNode
  to: string
}

const NavLink = (props: NavLinkProps) => {
  const { children, to } = props

  return (
    <Box
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      position="relative"
      _hover={{
        textDecoration: 'none',
        _after: {
          width: '100%',
        },
      }}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '0%',
        height: '1px',
        bg: 'white',
        transition: 'width 0.3s ease',
      }}
    >
      <Text textTransform="uppercase" letterSpacing="2px" fontSize="sm">
        {children}
      </Text>
    </Box>
  )
}

const Links = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' }
]

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box position="fixed" w="100%" zIndex={999} bg="black" borderBottom="1px solid" borderColor="whiteAlpha.200">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
          <HStack spacing={8} alignItems="center">
            <Text
              as={RouterLink}
              to="/"
              fontWeight="bold"
              fontSize="xl"
              letterSpacing="3px"
              textTransform="uppercase"
              _hover={{ textDecoration: 'none' }}
            >
              F.H
            </Text>
            <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
         
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
} 