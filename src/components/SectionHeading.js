import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from 'grommet'

const SectionHeading = ({ heading, size, subHeading }) => (
  <Box align="center" justify="center">
    <Text className="uppercase">{heading}</Text>
    <Heading level="2" margin={{ top: 'medium' }} size={size}>
      {subHeading}
    </Heading>
  </Box>
)

SectionHeading.propTypes = {
  heading: PropTypes.string,
  size: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired
}

export default SectionHeading
