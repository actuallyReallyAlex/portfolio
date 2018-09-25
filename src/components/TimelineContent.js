import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paragraph, Label, Meter } from 'grommet'

const TimelineContent = props => {
  return (
    <Box>
      <Label margin="none">{props.subtitle}</Label>
      <Meter colorIndex="graph-1" type="bar" value={100} size="xsmall" />
      <Paragraph margin="small">{props.summary}</Paragraph>
    </Box>
  )
}

TimelineContent.propTypes = {
  subtitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default TimelineContent
