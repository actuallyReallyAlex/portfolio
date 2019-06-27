import React from 'react'
import { Box, Heading, Text } from 'grommet'
import SocialIcon from '../components/SocialIcon'
import { social } from '../config.json'

const Footer = () => {
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
      <Box align="center" direction="row" gap="medium">
        <Text color="white">© 2019 Alex Lee</Text>
        <Box direction="row" gap="small">
          {social.map(({ icon, link }, i) => (
            <SocialIcon key={i} icon={icon} link={link} size="medium" />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
