import React from 'react'
import PropTypes from 'prop-types'
import { Anchor } from 'grommet'

const NavLink = ({ title }) => {
  return (
    <Anchor className="nav-link" onClick={() => smoothlyScroll(`#${title}`)}>
      {title}
    </Anchor>
  )
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired
}

export default NavLink

const smoothlyScroll = elementId => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.log(`Could not locate element: ${elementId}`)
  }
}
