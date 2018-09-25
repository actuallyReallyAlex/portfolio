import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Paragraph } from 'grommet'

const SectionHeader = props => {
  return (
    <Box direction="row" justify="center" align="center">
      <Box pad="medium">
        <Heading tag="h5" align="center" uppercase={true} strong={true}>
          {props.title}
        </Heading>
        <Heading tag="h1" align="center" margin="none">
          {props.subtitle}
        </Heading>
        {props.summary ? (
          <Paragraph align="center">{props.summary}</Paragraph>
        ) : null}
      </Box>
    </Box>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summary: PropTypes.string
}

export default SectionHeader
