import React from 'react'
import { Hero, Image, Box, Heading, Button } from 'grommet'
import Mail from 'grommet/components/icons/base/Mail'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialLinkedin from 'grommet/components/icons/base/SocialLinkedin'
import Cube from 'grommet/components/icons/base/Cube'

export const Intro = () => {
  return (
    <Hero
      background={
        <Image
          src={
            'https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_1152,f_auto/v1538630398/portfolio/portfolio_portland_dark_min.jpg'
          }
          full={true}
          fit="cover"
          alt="Portland's South Waterfront at night."
        />
      }
      backgroundColorIndex="dark"
      id="home"
    >
      <Box direction="row" justify="center" align="center">
        <Box pad="medium">
          <Heading tag="h4" align="center" uppercase={true} strong={true}>
            Hello, World.
          </Heading>
          <Heading tag="h1" align="center" margin="none" strong={true}>
            I&#39;m Alex Lee
          </Heading>
          <Heading tag="h4" align="center" uppercase={true} strong={true}>
            Web Developer
          </Heading>
        </Box>
      </Box>
      <Box responsive={false} direction="row" justify="center">
        <Button
          icon={<Mail />}
          onClick={() => window.open('mailto:alex@alex-lee.site', '_self')}
        />
        <Button
          icon={<SocialGithub />}
          onClick={() =>
            window.open('https://github.com/alexlee-dev/', '_blank')
          }
        />
        <Button
          icon={<Cube />}
          onClick={() =>
            window.open('https://www.npmjs.com/~alexlee-dev', '_blank')
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
