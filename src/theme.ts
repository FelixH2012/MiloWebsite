import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body, #root': {
        width: '100%',
        height: '100%',
      },
      body: {
        bg: '#000000',
        color: 'white',
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: 'whiteAlpha.400',
      },
      '*, *::before, *::after': {
        borderColor: 'whiteAlpha.100',
      },
    },
  },
  colors: {
    brand: {
      blue: '#3B82F6',
      gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
      pink: '#F43F5E',
    },
    glass: {
      background: 'rgba(17, 25, 40, 0.6)',
      border: 'rgba(255, 255, 255, 0.08)',
    },
  },
  sizes: {
    container: {
      xl: '1280px'
    }
  },
  components: {
    Container: {
      baseStyle: {
        w: '100%',
        maxW: '100%',
        px: { base: '4', md: '6', lg: '8' }
      }
    },
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
        transition: 'all 0.2s',
      },
      variants: {
        solid: {
          bg: 'brand.blue',
          color: 'white',
          _hover: {
            bg: 'brand.blue',
            opacity: 0.9,
          },
        },
        gradient: {
          bgGradient: 'brand.gradient',
          color: 'white',
          _hover: {
            opacity: 0.9,
          },
        },
        ghost: {
          color: 'white',
          _hover: {
            bg: 'whiteAlpha.100',
          },
        },
      },
      defaultProps: {
        variant: 'solid',
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'glass.background',
          backdropFilter: 'blur(10px)',
          borderRadius: 'xl',
          border: '1px solid',
          borderColor: 'glass.border',
          p: 6,
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'semibold',
        letterSpacing: 'tight',
      },
    },
    Text: {
      baseStyle: {
        color: 'whiteAlpha.900',
      },
    },
  },
  fonts: {
    heading: `'SF Pro Display', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `'SF Pro Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  layerStyles: {
    card: {
      bg: 'glass.background',
      backdropFilter: 'blur(10px)',
      borderRadius: 'xl',
      border: '1px solid',
      borderColor: 'glass.border',
      p: 6,
    },
  },
})

export default theme 