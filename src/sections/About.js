import React from 'react'
import { Section, Box, Paragraph, Image, Button } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import DocumentDownload from 'grommet/components/icons/base/DocumentDownload'

const About = () => {
  return (
    <Section id="about">
      <SectionHeader title="About" subtitle="Let me introduce myself." />
      <Box direction="row" justify="center" align="center">
        <Box pad="large">
          <Image
            src="https://avatars2.githubusercontent.com/u/41493792?s=400&u=d55d8a934c12a5a11c0618657aa60e2efb5e89d4&v=4"
            alt="Alex Lee"
            size="small"
          />
        </Box>
        <Box pad="large">
          <Paragraph>
            I'm a passionate Web Developer. Since I was 11, I've been fascinated
            with computers and design. I started writing in Visual Basic. Now
            I'm proud to say that I've grown in my development and design
            skillsets, making me a valuable asset to any team.
          </Paragraph>
        </Box>
      </Box>
      <Box direction="row" justify="center">
        <Box>
          <Profile />
        </Box>
      </Box>
      <Box direction="row" justify="center">
        <Box>
          <Skills />
        </Box>
      </Box>
      <Box pad={{ vertical: 'medium' }} responsive={false} direction="row" justify="center">
        <Button
          label="Résumé"
          icon={<DocumentDownload />}
          secondary
          href="https://github.com/alexlee-dev/portfolio/raw/master/src/assets/Resume.pdf"
        />
      </Box>
    </Section>
  )
}

export default About
