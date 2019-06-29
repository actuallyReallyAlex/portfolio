import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import SocialIcon from '../components/SocialIcon'
import { social } from '../config.json'
import { smoothlyScroll } from '../util'

const Footer = ({ size }) => (
  <Box
    align="center"
    className="primary-color"
    direction="row"
    fill="horizontal"
    height="50px"
    justify="between"
    pad={{ horizontal: 'medium' }}
  >
    <Button onClick={() => smoothlyScroll('Home')}>
      <Text color="white" size="xlarge" weight="bold">
        Alex Lee
      </Text>
    </Button>
    <Box align="center" direction="row" gap="medium">
      <Text color="white">© 2019 Alex Lee</Text>
      {size !== 'small' && (
        <Box direction="row" gap="small">
          {social.map(({ icon, link }, i) => (
            <SocialIcon key={i} icon={icon} link={link} size="medium" />
          ))}
        </Box>
      )}
    </Box>
  </Box>
)

Footer.propTypes = {
  size: PropTypes.string.isRequired
}

export default Footer
