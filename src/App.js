import React from 'react'
import { Grommet, grommet } from 'grommet'
import Nav from './components/Nav'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { useInView } from 'react-intersection-observer'

const App = () => {
  const [introRef, isIntroInView] = useInView()
  const [aboutRef, isAboutInView] = useInView()
  const [resumeRef, isResumeInView] = useInView()
  const [portfolioRef, isPortfolioInView] = useInView()

  const views = [
    { title: 'Home', isInView: isIntroInView },
    { title: 'About', isInView: isAboutInView },
    { title: 'Résumé', isInView: isResumeInView },
    { title: 'Portfolio', isInView: isPortfolioInView }
  ]

  return (
    <Grommet full theme={grommet}>
      <Nav views={views} />
      <Intro navRef={introRef} />
      <About navRef={aboutRef} />
      <Resume navRef={resumeRef} />
      <Portfolio navRef={portfolioRef} />
      <Footer />
    </Grommet>
  )
}

export default App
