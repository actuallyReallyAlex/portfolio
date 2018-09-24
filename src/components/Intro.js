import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Button } from 'semantic-ui-react'
import SocialGroup from './SocialGroup'

export const Intro = props => {
  return (
    <section id="intro">
      <div className="intro-overlay" />
      <div className="intro-content">
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h5" color={props.themeColor} id="header-hello-world">
                HELLO, WORLD.
              </Header>
              <Header as="h1" className="intro-header" id="header-name">
                I&#39;m {props.fullName}
              </Header>
              <p className="intro-position" id="header-position">
                <span>{props.position}</span>
              </p>
              <Button inverted color={props.themeColor}>
                More About Me
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <SocialGroup themeColor={props.themeColor} />
      </div>
    </section>
  )
}

Intro.propTypes = {
  fullName: PropTypes.string,
  themeColor: PropTypes.string,
  position: PropTypes.string
}
