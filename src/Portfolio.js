import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import NavMenu from './components/NavMenu'
// import { Intro } from './components/Intro'
import { App } from 'grommet'
import NavMenu from './components/NavMenu'
import Intro from './sections/Intro'
import About from './sections/About'
import Resume from './sections/Resume'

class Portfolio extends Component {
  render() {
    return (
      <App>
        <NavMenu />
        <Intro />
        <About />
        <Resume />
      </App>
    )
  }
}

Portfolio.propTypes = {
  themeColor: PropTypes.string
}

export default Portfolio
