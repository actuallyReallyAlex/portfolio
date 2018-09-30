import React from 'react'
import PropTypes from 'prop-types'
import { Box, Headline, Paragraph } from 'grommet'

const TimelineHeading = props => {
  return (
    <Box align="center">
      <Headline align="center" size="small" margin="none">
        {props.title}
      </Headline>
      {props.startDate ? (
        <Paragraph align="center" margin="small">
          {props.startDate} -{' '}
          {props.present === true ? 'Present' : props.endDate}
        </Paragraph>
      ) : (
        <Paragraph align="center" margin="small">
          {props.present === true ? 'Present' : props.endDate}
        </Paragraph>
      )}
    </Box>
  )
}

TimelineHeading.defaultProps = {
  endDate: 'End Date',
  present: false,
  startDate: 'Start Date',
  title: 'Example Title'
}

TimelineHeading.propTypes = {
  /** The end date for the TimelineItem. */
  endDate: PropTypes.string,
  /** If this item is still ongoing, apply the `present` prop. */
  present: PropTypes.bool,
  /** The start date for the TimelineItem. */
  startDate: PropTypes.string.isRequired,
  /** The title of the item. */
  title: PropTypes.string.isRequired
}

export default TimelineHeading
