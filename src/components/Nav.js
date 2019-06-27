import React from 'react'
import { Box, Text } from 'grommet'
import NavLink from './NavLink.js'
import { navigationSections } from '../config.json'

const Nav = ({ views }) => {
  const sectionInView = views.filter(view => view.isInView === true)
  console.log({ sectionInView })

  return (
    <Box
      align="center"
      className="primary-color"
      direction="row"
      fill="horizontal"
      height="50px"
      justify="between"
      pad={{ horizontal: 'medium' }}
      style={{ position: 'fixed', zIndex: '10' }}
    >
      <Text color="white" size="xlarge" weight="bold">
        Alex Lee
      </Text>
      <Box direction="row" gap="small">
        {navigationSections.map(title => (
          <NavLink
            active={sectionInView.length > 0 && title === sectionInView[0].title}
            key={title}
            title={title}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Nav
