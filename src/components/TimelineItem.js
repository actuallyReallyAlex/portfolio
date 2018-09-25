import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import TimelineIcon from './TimelineIcon'
import TimelineHeading from './TimelineHeading'
import TimelineContent from './TimelineContent'

const TimelineItem = props => {
  return (
    <Box direction="row" pad="medium" margin="none">
      <Box basis="medium" textAlign="right">
        {props.present ? (
          <TimelineHeading
            title={props.title}
            startDate={props.startDate}
            present
          />
        ) : (
          <TimelineHeading
            title={props.title}
            startDate={props.startDate}
            endDate={props.endDate}
          />
        )}
      </Box>
      <Box basis="small" align="center">
        <TimelineIcon icon={props.icon} />
      </Box>
      <Box basis="large">
        <TimelineContent subtitle={props.subtitle} summary={props.summary} />
      </Box>
    </Box>
  )
}

TimelineItem.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  present: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default TimelineItem
