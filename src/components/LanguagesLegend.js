import React from 'react'
import PropTypes from 'prop-types'
import { Legend } from 'grommet'
import { languageProperties, getArrayofLabels } from '../utilities'

const LanguagesLegend = props => {
  return (
    <Legend series={getArrayofLabels(props.languages, languageProperties)} />
  )
}

LanguagesLegend.propTypes = {
  languages: PropTypes.array.isRequired
}

export default LanguagesLegend
