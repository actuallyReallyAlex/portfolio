import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paragraph, Legend } from 'grommet'
import { languageProperties, getArrayofLabels } from '../utilities'

const PortfolioItemDescription = props => {
  return (
    <Box>
      <Legend series={getArrayofLabels(props.languages, languageProperties)} />
      <Paragraph size="large" margin="medium">
        {props.description}
      </Paragraph>
    </Box>
  )
}

PortfolioItemDescription.defaultProps = {
  description: 'Example Description',
  languages: ['HTML', 'CSS', 'JavaScript']
}

PortfolioItemDescription.propTypes = {
  /** A short description of the project. */
  description: PropTypes.string.isRequired,
  /** A colorful legend to show which languages were used on the project. */
  languages: PropTypes.array.isRequired
}

export default PortfolioItemDescription
