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
        width: '100%',
        height: '100%',
        background: 'black',
        color: 'white',
        cursor: 'crosshair',
      },
      '::selection': {
        background: 'white',
        color: 'black',
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
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1280px',
        px: { base: '4', md: '6', lg: '8' },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'mono',
        fontWeight: 'normal',
        borderRadius: '0',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        position: 'relative',
        transition: 'all 0.3s',
        _before: {
          content: '""',
          position: 'absolute',
          top: '2px',
          left: '2px',
          width: '100%',
          height: '100%',
          background: 'white',
          zIndex: -1,
          transition: 'all 0.3s',
        },
      },
      variants: {
        solid: {
          bg: 'black',
          color: 'white',
          border: '1px solid white',
          _hover: {
            transform: 'translate(-2px, -2px)',
            _before: {
              transform: 'translate(4px, 4px)',
            },
          },
        },
        outline: {
          bg: 'transparent',
          color: 'white',
          border: '1px solid white',
          _hover: {
            bg: 'white',
            color: 'black',
          },
        },
        ghost: {
          _hover: {
            bg: 'whiteAlpha.100',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'black',
          borderRadius: '0',
          border: '1px solid white',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            width: '2px',
            height: '100%',
            background: 'white',
            animation: 'scanline 4s linear infinite',
          },
          _after: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
            animation: 'scanline 8s linear infinite',
          },
          _hover: {
            '& > *': {
              animation: 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both 1',
            },
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'mono',
        fontWeight: 'normal',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        position: 'relative',
        display: 'inline-block'
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'mono',
        letterSpacing: '0.5px',
        position: 'relative',
      },
    },
  },
  fonts: {
    heading: 'IBM Plex Mono, monospace',
    body: 'IBM Plex Mono, monospace',
    mono: 'IBM Plex Mono, monospace',
  },
})

export default theme 