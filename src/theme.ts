import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Custom keyframes for glitch effect
const glitchKeyframes = {
  '0%': {
    clipPath: 'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)',
    transform: 'translate(20px)',
  },
  '20%': {
    clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)',
    transform: 'translate(-20px)',
  },
  '30%': {
    clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)',
    transform: 'translate(15px)',
  },
  '40%': {
    clipPath: 'polygon(0 1%, 100% 1%, 100% 2%, 0 2%)',
    transform: 'translate(-15px)',
  },
  '50%': {
    clipPath: 'polygon(0 33%, 100% 33%, 100% 33%, 0 33%)',
    transform: 'translate(0)',
  },
  '55%': {
    transform: 'translate(2px)',
  },
  '60%': {
    clipPath: 'polygon(0 44%, 100% 44%, 100% 44%, 0 44%)',
    transform: 'translate(0)',
  },
  '100%': {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transform: 'translate(0)',
  },
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        background: 'black',
        color: 'white',
        overflow: 'hidden',
      },
      'body > div:first-of-type': {
        width: '100%',
        height: '100%',
        overflow: 'auto',
      },
      '#root': {
        width: '100%',
        minHeight: '100%',
      },
      '::selection': {
        background: 'white',
        color: 'black',
      },
      '.custom-cursor': {
        width: '30px',
        height: '30px',
        border: '2px solid white',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.2s ease',
      },
      '.cursor-dot': {
        width: '4px',
        height: '4px',
        background: 'white',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
      },
      '.invert-circle': {
        width: '80px',
        height: '80px',
        background: 'white',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.3s ease-out, width 0.3s ease, height 0.3s ease',
      },
      '@keyframes glitch': glitchKeyframes,
      '@keyframes scanline': {
        '0%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(100%)',
        },
      },
      '@keyframes blink': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },
  colors: {
    brand: {
      accent: '#FFFFFF',
      purple: {
        50: 'rgba(147, 112, 219, 0.05)',
        100: 'rgba(147, 112, 219, 0.1)',
        200: 'rgba(147, 112, 219, 0.2)',
        300: 'rgba(147, 112, 219, 0.3)',
        400: 'rgba(147, 112, 219, 0.4)',
        500: 'rgba(147, 112, 219, 0.5)',
        600: 'rgba(147, 112, 219, 0.6)',
        700: 'rgba(147, 112, 219, 0.7)',
        800: 'rgba(147, 112, 219, 0.8)',
        900: 'rgba(147, 112, 219, 0.9)',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '100%',
        w: '100%',
        px: { base: '4', md: '6', lg: '8' },
        mx: 'auto',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'Futura, sans-serif',
        fontWeight: 'medium',
        borderRadius: '0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        transition: 'all 0.3s',
        _hover: {
          transform: 'translateY(-2px)',
        },
      },
      variants: {
        solid: {
          bg: 'white',
          color: 'black',
          _hover: {
            bg: 'whiteAlpha.900',
          },
        },
        outline: {
          bg: 'transparent',
          color: 'white',
          border: '1px solid white',
          _hover: {
            bg: 'whiteAlpha.100',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'transparent',
          borderRadius: '0',
          border: '1px solid whiteAlpha.200',
          transition: 'all 0.3s',
          overflow: 'hidden',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          _hover: {
            borderColor: 'white',
          },
        },
        body: {
          padding: 6,
          flex: 1,
        },
      },
    },
    SimpleGrid: {
      baseStyle: {
        width: '100%',
        display: 'grid',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Futura, sans-serif',
        fontWeight: 'bold',
        letterSpacing: '0',
        textTransform: 'none',
        color: 'white',
      },
      variants: {
        hero: {
          fontSize: { base: '4rem', md: '8rem', lg: '12rem' },
          lineHeight: '0.9',
          letterSpacing: '-2px',
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Futura, sans-serif',
        letterSpacing: '0',
        color: 'white',
      },
    },
    Box: {
      baseStyle: {
        width: '100%',
      },
    },
  },
  fonts: {
    heading: 'Futura, sans-serif',
    body: 'Futura, sans-serif',
  },
})

export default theme 