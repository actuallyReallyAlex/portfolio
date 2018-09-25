import React from 'react'
import { Box, Heading } from 'grommet'
import LoremIpsum from './LoremIpsum'
import ProfileStats from './ProfileStats'

const Profile = () => {
  return (
    <Box direction="row">
      <Box pad="large">
        <Heading tag="h3">Profile</Heading>
        <LoremIpsum />
      </Box>
      <Box>
        <ProfileStats />
      </Box>
    </Box>
  )
}

export default Profile
