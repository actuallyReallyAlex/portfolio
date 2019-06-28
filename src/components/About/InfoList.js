import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Paragraph, Text } from 'grommet'
import { about } from '../../config.json'

const InfoList = ({ size }) => {
  return (
    <Box
      align="start"
      direction={size === 'small' ? 'column' : 'row'}
      fill="horizontal"
      gap={size === 'small' ? 'medium' : 'xlarge'}
      justify="center"
      margin={{ vertical: 'large' }}
    >
      <Box>
        <Heading level="3">Profile</Heading>
        <Paragraph>{about.profile}</Paragraph>
      </Box>
      <Box>
        <Heading className="uppercase" level="3" margin="none">
          Full Name:
        </Heading>
        <Text margin={{ bottom: 'small' }}>{about.fullName}</Text>
        <Heading className="uppercase" level="3" margin="none">
          Job:
        </Heading>
        <Text margin={{ bottom: 'small' }}>{about.job}</Text>
        <Heading className="uppercase" level="3" margin="none">
          Email:
        </Heading>
        <Text>{about.email}</Text>
      </Box>
    </Box>
  )
}

InfoList.propTypes = {
  size: PropTypes.string.isRequired
}

export default InfoList
