import React from 'react'
import { Box, Paragraph } from 'grommet'
import SectionHeading from '../components/SectionHeading'

const About = () => {
  return (
    <Box align="center" fill="horizontal" justify="center" pad="large">
      <SectionHeading heading="About" subHeading="Let me introduce myself." />
      <Box
        align="center"
        direction="row"
        fill="horizontal"
        gap="xlarge"
        justify="center"
        margin={{ top: 'medium' }}
      >
        <Box
          background={`url(https://avatars2.githubusercontent.com/u/41493792?s=400&u=d55d8a934c12a5a11c0618657aa60e2efb5e89d4&v=4)`}
          height="192px"
          width="192px"
        />
        <Paragraph margin="none" size="medium">
          I'm a passionate Web Developer. Since I was 11, I've been fascinated
          with computers and design. I started writing in Visual Basic. Now I'm
          proud to say that I've grown in my development and design skillsets,
          making me a valuable asset to any team.
        </Paragraph>
      </Box>
    </Box>
  )
}

export default About
