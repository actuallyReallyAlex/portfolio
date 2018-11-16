import React from 'react'
import PropTypes from 'prop-types'
import { Legend } from 'grommet'
import { languageProperties, getArrayofLabels } from '../utilities'

const LanguagesLegend = props => {
  return (
    <Legend className="languages-legend" series={getArrayofLabels(props.languages, languageProperties)} />
  )
}

LanguagesLegend.defaultProps = {
  languages: ['HTML5', 'CSS3', 'JavaScript']
}

LanguagesLegend.propTypes = {
  /** A colorful legend to show which languages were used on the project. */
  languages: PropTypes.array.isRequired
}

export default LanguagesLegend
