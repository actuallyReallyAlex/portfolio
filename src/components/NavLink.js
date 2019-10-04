import React from 'react'
import PropTypes from 'prop-types'
import { Anchor } from 'grommet'
import { smoothlyScroll } from '../util'
import { Link } from 'react-router-dom'

const DefaultLink = ({ active, title }) => (
  <Anchor
    color="black"
    className={`nav-link slow-transition ${active ? 'active' : ''}`}
    onClick={() => smoothlyScroll(title)}
  >
    {title}
  </Anchor>
)

const dict = {
  Home: {
    to: '/'
  },
  Blog: {
    to: '/blog'
  }
}

const RouterLink = ({ active, title }) => (
  <Link to={dict[title].to}>{title}</Link>
)

const NavLink = ({ active, title }) =>
  title === 'Home' || title === 'Blog' ? (
    <RouterLink active={active} title={title} />
  ) : (
    <DefaultLink active={active} title={title} />
  )

NavLink.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default NavLink
