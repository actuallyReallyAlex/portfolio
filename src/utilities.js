const languageProperties = [
  {
    name: 'HTML5',
    color: 'accent-1'
  },
  {
    name: 'CSS3',
    color: 'accent-2'
  },
  {
    name: 'JavaScript',
    color: 'neutral-1'
  },
  {
    name: 'C#',
    color: 'neutral-2'
  },
  {
    name: 'Markdown',
    color: 'critical'
  },
  {
    name: 'MDX',
    color: 'warning'
  },
  {
    name: 'JSX',
    color: 'ok'
  },
  {
    name: 'JSON',
    color: 'accent-1'
  },
  {
    name: 'React.js',
    color: 'accent-2'
  },
  {
    name: 'MS Visual Studio',
    color: 'neutral-1'
  },
  {
    name: 'Node.js',
    color: 'neutral-2'
  },
  {
    name: 'Adobe Photoshop',
    color: 'critical'
  },
  {
    name: 'Adobe Illustrator',
    color: 'warning'
  },
  {
    name: 'JQuery',
    color: 'ok'
  },
  {
    name: 'Bootstrap',
    color: 'accent-1'
  }
]

/**
 * Takes in a set of languages and returns a corresponding array of properties.
 * @param {Array} languages Array of strings, each element being a programing language.
 * @param {Array} languageProperties Array of properties to search through.
 * @returns {Array} An array of info for the legend series.
 */
function getArrayofLabels(languages, languageProperties) {
  let seriesArray = []

  languages.forEach(languageString => {
    let correspondingLanguagePropertiesObject = languageProperties.find(obj => {
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

module.exports = {
  languageProperties,
  getArrayofLabels
}
