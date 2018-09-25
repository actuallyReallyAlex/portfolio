import React from 'react'
import PropTypes from 'prop-types'
// import SocialGroup from './SocialGroup'
import { Hero, Image, Box, Heading, Button } from 'grommet'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialLinkedin from 'grommet/components/icons/base/SocialLinkedin'
import introImgPath from '../darkCity.jpg'

export const Intro = () => {
  return (
    <Hero
      background={<Image src={introImgPath} full={true} fit="cover" />}
      backgroundColorIndex="dark"
    >
      <Box direction="row" justify="center" align="center">
        <Box pad="medium">
          <Heading tag="h5" align="center" uppercase={true} strong={true}>
            Hello, World.
          </Heading>
          <Heading tag="h1" align="center" margin="none">
            I&#39;m Alex Lee
          </Heading>
          <Heading tag="h5" align="center" uppercase={true}>
            Web Developer
          </Heading>
        </Box>
      </Box>
      <Box direction="row" justify="center">
        <Button
          icon={<SocialGithub />}
          onClick={() =>
            window.open('https://github.com/alexlee-dev/', '_blank')
          }
        />
        <Button
          icon={<SocialTwitter />}
          onClick={() =>
            window.open('https://twitter.com/alexlee_dev', '_blank')
          }
        />
        <Button
          icon={<SocialLinkedin />}
          onClick={() =>
            window.open('https://www.linkedin.com/in/alexlee-dev', '_blank')
          }
        />
      </Box>
    </Hero>
  )
}

export default Intro

// Intro.propTypes = {
//   fullName: PropTypes.string,
//   themeColor: PropTypes.string,
//   position: PropTypes.string
// }

// {
/* <section id="intro">
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
    </section> */
// }
