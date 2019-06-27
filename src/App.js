import React from 'react'
import { Grommet, grommet } from 'grommet'
import Nav from './components/Nav'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => {
  return (
    <Grommet full theme={grommet}>
      <Nav />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </Grommet>
  )
}

export default App
