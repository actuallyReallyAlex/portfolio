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
      <Box pad="medium" basis="small" align="center">
        <TimelineIcon icon={props.icon} />
      </Box>
      <Box basis="large">
        <TimelineContent subtitle={props.subtitle} summary={props.summary} />
      </Box>
    </Box>
  )
}

TimelineItem.defaultProps = {
  endDate: 'End Date',
  icon: 'briefcase',
  present: false,
  startDate: 'Start Date',
  subtitle: 'Example Subtitle',
  summary: 'Example Summary',
  title: 'Example Title'
}

TimelineItem.propTypes = {
  /** End date for item. */
  endDate: PropTypes.string,
  /** Icon to be displayed in the middle of the item. */
  icon: PropTypes.string,
  /** If this item is still ongoing, apply the `present` prop. */
  present: PropTypes.bool,
  /** Start date for item. */
  startDate: PropTypes.string.isRequired,
  /** A smaller title with more description. */
  subtitle: PropTypes.string.isRequired,
  /** A summary of the item. */
  summary: PropTypes.string.isRequired,
  /** A title for the item. */
  title: PropTypes.string.isRequired
}

export default TimelineItem
