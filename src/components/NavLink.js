import React from 'react'
import PropTypes from 'prop-types'
import { Anchor } from 'grommet'
import { smoothlyScroll } from '../util'

const NavLink = ({ active, title }) => (
  <Anchor
    color="black"
    className={`nav-link slow-transition ${active ? 'active' : ''}`}
    onClick={() => smoothlyScroll(title)}
  >
    {title}
  </Anchor>
)

NavLink.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default NavLink
