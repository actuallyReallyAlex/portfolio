import React from 'react'
import { Box, Heading } from 'grommet'
import { social } from '../../config.json'
import SocialIcon from '../SocialIcon'

const Intro = () => {
  return (
    <Box
      align="center"
      background="url(
        'https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_1152,f_auto/v1538630398/portfolio/portfolio_portland_dark_min.jpg'
      )"
      fill="horizontal"
      height="500px"
      id="Home"
      justify="center"
    >
      <Box direction="row" justify="center" align="center">
        <Box align="center" justify="center" pad="medium">
          <Heading className="uppercase" color="white" level="4" margin="none">
            Hello, World.
          </Heading>
          <Heading
            color="white"
            level="1"
            margin={{ top: 'small', bottom: 'none' }}
            size="4em"
          >
            I&#39;m Alex Lee
          </Heading>
          <Heading className="uppercase" color="white" level="4" margin="none">
            Web Developer
          </Heading>
          <Box direction="row" margin={{ top: 'large' }}>
            {social.map(({ icon, link }, i) => (
              <SocialIcon key={i} icon={icon} link={link} size="large" />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Intro
