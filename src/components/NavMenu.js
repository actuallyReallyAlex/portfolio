import React, { Component } from 'react'
import { Header, Title, Box, Menu, Anchor } from 'grommet'

class NavMenu extends Component {
  state = { currentSection: 'home' }

  smoothlyScroll = elementId => {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: 'smooth', block: 'start' })

    this.setState({ currentSection: elementId })
  }
  render() {
    return (
      <Header pad={{ horizontal: 'medium' }} fixed={true}>
        <Title>Alex Lee</Title>
        <Box flex={true} justify="end" direction="row" responsive={false}>
          <Menu direction="row" size="small" dropAlign={{ right: 'right' }}>
            <Anchor
              onClick={() => {
                this.smoothlyScroll('home')
              }}
              className={this.state.currentSection === 'home' ? 'active' : ''}
            >
              Home
            </Anchor>
            <Anchor
              onClick={() => this.smoothlyScroll('about')}
              className={this.state.currentSection === 'about' ? 'active' : ''}
            >
              About
            </Anchor>
            <Anchor
              onClick={() => this.smoothlyScroll('resume')}
              className={this.state.currentSection === 'resume' ? 'active' : ''}
            >
              Resume
            </Anchor>
            <Anchor
              onClick={() => this.smoothlyScroll('portfolio')}
              className={
                this.state.currentSection === 'portfolio' ? 'active' : ''
              }
            >
              Portfolio
            </Anchor>
            <Anchor
              onClick={() => this.smoothlyScroll('contact')}
              className={
                this.state.currentSection === 'contact' ? 'active' : ''
              }
            >
              Contact
            </Anchor>
          </Menu>
        </Box>
      </Header>
    )
  }
}

export default NavMenu
