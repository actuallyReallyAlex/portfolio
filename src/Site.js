import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { App } from 'grommet'
import NavMenu from './components/NavMenu'
import Intro from './sections/Intro'
import About from './sections/About'
import Resume from './sections/Resume'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import FooterSection from './sections/FooterSection'

class Site extends Component {
  render() {
    return (
      <App>
        <NavMenu />
        <Intro />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <FooterSection />
      </App>
    )
  }
}

Site.propTypes = {
  themeColor: PropTypes.string
}

export default Site
