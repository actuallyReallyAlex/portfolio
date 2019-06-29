import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Paragraph, Text } from 'grommet'
import { info, sections } from '../../config.json'

const about = sections.find(({ title }) => title === 'About')

const InfoList = ({ size }) => (
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
        Name:
      </Heading>
      <Text margin={{ bottom: 'small' }}>{info.name}</Text>
      <Heading className="uppercase" level="3" margin="none">
        Occupation:
      </Heading>
      <Text margin={{ bottom: 'small' }}>{info.occupation}</Text>
      <Heading className="uppercase" level="3" margin="none">
        Email:
      </Heading>
      <Text>{info.email}</Text>
    </Box>
  </Box>
)

InfoList.propTypes = {
  size: PropTypes.string.isRequired
}

export default InfoList
