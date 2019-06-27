import React from 'react'
import { Box, Paragraph, Heading } from 'grommet'
import SectionHeading from '../SectionHeading'
import { about } from '../../config.json'
import InfoList from './InfoList'
import Skills from './Skills';

const About = () => {
  return (
    <Box
      align="center"
      fill="horizontal"
      id="About"
      justify="center"
      pad="large"
    >
      <SectionHeading heading={about.heading} subHeading={about.subHeading} />
      <Box
        align="center"
        direction="row"
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
      <InfoList />
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
      <Skills />
    </Box>
  )
}

export default About
