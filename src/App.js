import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavMenu from './components/NavMenu'
import { Intro } from './components/Intro'

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu className="custom-header" />
        <Intro fullName="Alex Lee" themeColor={this.props.themeColor} position="Web Developer" />
      </div>
    )
  }
}

App.propTypes = {
  themeColor: PropTypes.string
}

export default App
