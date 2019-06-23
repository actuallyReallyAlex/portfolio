import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'grommet'
import * as icons from 'grommet-icons'

const SocialIcon = ({ icon, link }) => {
  const Icon = icons[icon]
  return (
    <Button
      icon={<Icon color="rgba(255, 255, 255, 0.75)" />}
      onClick={() => window.open(link, '_blank')}
    />
  )
}

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default SocialIcon
