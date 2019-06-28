import React, { Fragment } from 'react'
import { Grommet, grommet, ResponsiveContext } from 'grommet'
import Nav from './components/Nav'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useInView } from 'react-intersection-observer'

const App = () => {
  const [introRef, isIntroInView] = useInView()
  const [aboutRef, isAboutInView] = useInView()
  const [resumeRef, isResumeInView] = useInView()
  const [portfolioRef, isPortfolioInView] = useInView()
  const [contactRef, isContactInView] = useInView()

  const views = [
    { title: 'Home', isInView: isIntroInView },
    { title: 'About', isInView: isAboutInView },
    { title: 'Résumé', isInView: isResumeInView },
    { title: 'Portfolio', isInView: isPortfolioInView },
    { title: 'Contact', isInView: isContactInView }
  ]

  return (
    <Grommet full theme={grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Fragment>
            <Nav size={size} views={views} />
            <Intro navRef={introRef} size={size} />
            <About navRef={aboutRef} size={size} />
            <Resume navRef={resumeRef} size={size} />
            <Portfolio navRef={portfolioRef} size={size} />
            <Contact navRef={contactRef} size={size} />
            <Footer size={size} />
          </Fragment>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
