import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'grommet'
import * as icons from 'grommet-icons'
import { useHover } from '../hooks/useHover'

const SocialIcon = ({ icon, link }) => {
  const Icon = icons[icon]
  const [hoverRef, isHovered] = useHover()

  return (
    <Button
      icon={
        <Icon
          className="slow-transition"
          color={
            isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.75)'
          }
        />
      }
      onClick={() => window.open(link, '_blank')}
      ref={hoverRef}
    />
  )
}

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default SocialIcon
