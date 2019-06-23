import React from 'react'
import { Box, Text } from 'grommet'
import { navigationSections } from '../config.json'
import NavLink from './NavLink.js'

const Nav = () => {
  return (
    <Box
      align="center"
      className="primary-color"
      direction="row"
      fill="horizontal"
      height="50px"
      justify="between"
      pad={{ horizontal: 'medium' }}
    >
      <Text color="white" size="xlarge" weight="bold">
        Alex Lee
      </Text>
      <Box direction="row" gap="small">
        {navigationSections.map(title => (
          <NavLink key={title} title={title} />
        ))}
      </Box>
    </Box>
  )
}

export default Nav
