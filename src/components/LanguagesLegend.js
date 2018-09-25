import React from 'react'
import PropTypes from 'prop-types'
import { Legend } from 'grommet'

const itemProperties = [
  {
    name: 'HTML',
    color: 'brand'
  },
  {
    name: 'CSS',
    color: 'brand'
  },
  {
    name: 'JavaScript',
    color: 'ok'
  },
  {
    name: 'C#',
    color: 'warning'
  },
  {
    name: 'Markdown',
    color: 'accent-2'
  },
  {
    name: 'MDX',
    color: 'accent-3'
  },
  {
    name: 'JSX',
    color: 'accent-3'
  },
  {
    name: 'JSON',
    color: 'neutral-1'
  },
  {
    name: 'React.js',
    color: 'accent-1'
  },
  {
    name: 'MS Visual Studio',
    color: 'neutral-3'
  },
  {
    name: 'Node.js',
    color: 'critical'
  },
  {
    name: 'Adobe Photoshop',
    color: 'brand'
  },
  {
    name: 'Adobe Illustrator',
    color: 'accent-1'
  },
  {
    name: 'JQuery',
    color: 'accent-2'
  },
  {
    name: 'Bootstrap',
    color: 'accent-3'
  }
]

/**
 * Takes in a set of languages and returns a corresponding array of properties.
 * @param {Array} languages Array of strings, each element being a programing language.
 * @param {Array} languageProperties Array of properties to search through.
 * @returns {Array} An array of info for the legend series.
 */
function getArrayofLabels(languages, itemProperties) {
  let seriesArray = []

  languages.forEach(languageString => {
    let correspondingLanguagePropertiesObject = itemProperties.find(obj => {
      return obj.name === languageString
    })

    let languageObject = {
      label: correspondingLanguagePropertiesObject.name,
      colorIndex: correspondingLanguagePropertiesObject.color
    }

    seriesArray.push(languageObject)
  })

  return seriesArray
}

const LanguagesLegend = props => {
  return <Legend series={getArrayofLabels(props.languages, itemProperties)} />
}

LanguagesLegend.propTypes = {
  languages: PropTypes.array.isRequired
}

export default LanguagesLegend
