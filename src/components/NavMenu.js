import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Header, Title, Box, Menu, Anchor } from 'grommet'

class NavMenu extends Component {
  render() {
    return (
      <Header fixed={true}>
        <Title>Alex Lee</Title>
        <Box flex={true} justify="end" direction="row" responsive={false}>
          <Menu dropAlign={{ right: 'right' }}>
            <Anchor href="#" className="active">
              First
            </Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </Box>
      </Header>
    )
  }
}

export default NavMenu
