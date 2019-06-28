import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paragraph, Heading } from 'grommet'
import SectionHeading from '../SectionHeading'
import { about } from '../../config.json'
import InfoList from './InfoList'
import Skills from './Skills'

const About = ({ navRef, size }) => (
  <Box
    align="center"
    fill="horizontal"
    id="About"
    justify="center"
    pad="large"
    ref={navRef}
  >
    <SectionHeading
      heading={about.heading}
      subHeading={about.subHeading}
      size={size === 'small' ? 'medium' : 'large'}
    />
    <Box
      align="center"
      direction={size === 'small' ? 'column' : 'row'}
      fill="horizontal"
      gap="xlarge"
      justify="center"
      margin={{ vertical: 'large' }}
    >
      <Box
        background={`url(${about.profileImage})`}
        height="192px"
        width="192px"
      />
      <Paragraph margin="none" size="medium">
        {about.copy}
      </Paragraph>
    </Box>
    <InfoList size={size} />
    <Box
      align="center"
      fill="horizontal"
      justify="start"
      margin={{ vertical: 'large' }}
    >
      <Box gap="medium">
        <Heading level="3" margin="none">
          Skills
        </Heading>
        <Paragraph>{about.skillsCopy}</Paragraph>
      </Box>
    </Box>
    <Skills size={size} />
  </Box>
)

About.propTypes = {
  navRef: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
}

export default About
