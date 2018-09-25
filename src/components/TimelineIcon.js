import React from 'react'
import PropTypes from 'prop-types'
import Analytics from 'grommet/components/icons/base/Analytics'
import Code from 'grommet/components/icons/base/Code'
import Aid from 'grommet/components/icons/base/Aid'
import Briefcase from 'grommet/components/icons/base/Briefcase'
import Book from 'grommet/components/icons/base/Book'

const dictionary = [
  {
    name: 'analytics',
    icon: <Analytics />
  },
  {
    name: 'code',
    icon: <Code />
  },
  {
    name: 'aid',
    icon: <Aid />
  },
  {
    name: 'book',
    icon: <Book />
  }
]

function getIcon(iconName) {
  if (iconName) {
    const iconObject = dictionary.find(obj => {
      return obj.name === iconName
    })

    let icon = iconObject.icon

    return icon
  } else {
    return <Briefcase />
  }
}

const TimelineIcon = props => {
  return getIcon(props.icon)
}

TimelineIcon.propTypes = {
  icon: PropTypes.string
}

export default TimelineIcon
