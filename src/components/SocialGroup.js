import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const SocialGroup = props => {
  return (
    <div id="intro-social">
      <Button inverted circular color={props.themeColor} icon="twitter" />
      <Button inverted circular color={props.themeColor} icon="linkedin" />
      <Button inverted circular color={props.themeColor} icon="github" />
    </div>
  )
}

SocialGroup.propTypes = {
  themeColor: PropTypes.string
}

export default SocialGroup
