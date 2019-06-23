import React from 'react'
import { Box, Heading } from 'grommet'
import { social } from '../config.json'
import SocialIcon from '../components/SocialIcon'

const Section = () => {
  return (
    <Box
      align="center"
      background="url(
        'https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_1152,f_auto/v1538630398/portfolio/portfolio_portland_dark_min.jpg'
      )"
      height="400px"
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
          >
            I&#39;m Alex Lee
          </Heading>
          <Heading className="uppercase" color="white" level="4" margin="none">
            Web Developer
          </Heading>
          <Box direction="row" margin={{ top: 'medium' }}>
            {social.map(({ icon, link }, i) => (
              <SocialIcon key={i} icon={icon} link={link} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section
