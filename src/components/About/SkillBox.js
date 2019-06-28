import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'

const SkillBox = ({ color, title }) => (
  <Box align="center" direction="row" gap="small" justify="center">
    <Box background={color} height="10px" width="10px" />
    <Heading level="4" margin="none">
      {title}
    </Heading>
  </Box>
)

SkillBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default SkillBox
