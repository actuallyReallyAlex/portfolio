import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'
import ProfileStats from './ProfileStats'

const Profile = () => {
  return (
    <Box direction="row">
      <Box pad="large">
        <Heading tag="h3">Profile</Heading>
        <Paragraph>
          I love to brainstorm in a team environment; however, I'm also
          incredibly self-motivated. In every project, I'm determined to get the
          job done without compromising on quality.
        </Paragraph>
      </Box>
      <Box>
        <ProfileStats />
      </Box>
    </Box>
  )
}

export default Profile
