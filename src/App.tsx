import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router basename="/MiloWebsite">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
