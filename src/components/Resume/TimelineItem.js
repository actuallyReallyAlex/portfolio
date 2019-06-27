import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Paragraph, Text } from 'grommet'
import * as icons from 'grommet-icons'

const TimelineItem = ({
  endDate,
  icon,
  organization,
  present,
  startDate,
  summary,
  title
}) => {
  const Icon = icons[icon]

  return (
    <Box
      align="start"
      direction="row"
      fill="horizontal"
      gap="xlarge"
      justify="center"
    >
      <Box style={{ textAlign: 'right' }} width="30%">
        <Heading level="3">{title}</Heading>
        <Text>
          {startDate} - {present ? 'Present' : endDate}
        </Text>
      </Box>
      <Box align="center" pad="medium" width="10%">
        <Icon />
      </Box>
      <Box>
        <Heading level="4" margin="none">
          {organization}
        </Heading>
        <Box
          background="neutral-3"
          height="3px"
          margin={{ top: 'small', bottom: 'medium' }}
          round="small"
          width="60%"
        />
        <Paragraph>{summary}</Paragraph>
      </Box>
    </Box>
  )
}

TimelineItem.propTypes = {
  endDate: PropTypes.string,
  icon: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  present: PropTypes.bool,
  startDate: PropTypes.string,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default TimelineItem
