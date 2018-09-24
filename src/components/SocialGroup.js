import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const SocialGroup = props => {
  return (
    <div id="intro-social">
      <Button
        inverted
        circular
        color={props.themeColor}
        icon="github"
        onClick={() => window.open('https://github.com/alexlee-dev/', '_blank')}
      />
      <Button
        inverted
        circular
        color={props.themeColor}
        icon="twitter"
        onClick={() => window.open('https://twitter.com/alexlee_dev', '_blank')}
      />
      <Button
        inverted
        circular
        color={props.themeColor}
        icon="linkedin"
        onClick={() =>
          window.open('https://www.linkedin.com/in/alexlee-dev', '_blank')
        }
      />
    </div>
  )
}

SocialGroup.propTypes = {
  themeColor: PropTypes.string
}

export default SocialGroup
