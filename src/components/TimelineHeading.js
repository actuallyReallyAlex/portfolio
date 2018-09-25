import React from 'react'
import PropTypes from 'prop-types'
import { Box, Headline, Paragraph } from 'grommet'

const TimelineHeading = props => {
  return (
    <Box>
      <Headline size="small" margin="none">
        {props.title}
      </Headline>
      <Paragraph margin="small">
        {props.startDate} - {props.present === true ? 'Present' : props.endDate}
      </Paragraph>
    </Box>
  )
}

TimelineHeading.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  present: PropTypes.bool,
  title: PropTypes.string.isRequired
}

export default TimelineHeading
