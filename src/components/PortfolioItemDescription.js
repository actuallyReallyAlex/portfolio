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

PortfolioItemDescription.propTypes = {
  languages: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired
}

export default PortfolioItemDescription
