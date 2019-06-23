import React from 'react'
import { Anchor, Box, Text } from 'grommet'

const Nav = () => {
  return (
    <Box
      align="center"
      background="neutral-3"
      direction="row"
      fill="horizontal"
      height="50px"
      justify="between"
      pad={{ horizontal: 'medium' }}
    >
      <Text size="xlarge" weight="bold">
        Alex Lee
      </Text>
      <Box direction="row" gap="small">
        <Anchor color="white">Home</Anchor>
        <Anchor color="white">About</Anchor>
        <Anchor color="white">Résumé</Anchor>
        <Anchor color="white">Portfolio</Anchor>
        <Anchor color="white">Contact</Anchor>
      </Box>
    </Box>
  )
}

export default Nav
