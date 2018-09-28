import React from 'react'
import { Box, Label, Paragraph } from 'grommet'

const paragraphStyle = {
  marginTop: '0'
}

const ProfileStats = () => {
  return (
    <Box pad="large" direction="column">
      <Label uppercase margin="none">
        Full Name:
      </Label>
      <Paragraph margin="small" style={paragraphStyle}>
        Alex Lee
      </Paragraph>
      <Label uppercase margin="none">
        Job:
      </Label>
      <Paragraph margin="small" style={paragraphStyle}>
        Web Developer
      </Paragraph>
      <Label uppercase margin="none">
        Email:
      </Label>
      <Paragraph margin="small" style={paragraphStyle}>
        alex@alex-lee.site
      </Paragraph>
    </Box>
  )
}

export default ProfileStats
