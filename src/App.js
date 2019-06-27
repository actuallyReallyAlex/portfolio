import React from 'react'
import { Grommet, grommet } from 'grommet'
import Nav from './components/Nav'
import Intro from './sections/Intro'
import About from './sections/About'
import Resume from './sections/Resume'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <Grommet full theme={grommet}>
      <Nav />
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
    </Grommet>
  )
}

export default App
