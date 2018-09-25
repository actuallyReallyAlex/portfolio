import React from 'react'
import { Section, Columns, Box, Paragraph, Image, Button } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import DocumentDownload from 'grommet/components/icons/base/DocumentDownload'

const About = () => {
  return (
    <Section>
      <SectionHeader title="About" subtitle="Let me introduce myself." />
      <Columns maxCount={2} justify="center">
        <Box align="end" pad="medium">
          <Image
            src="https://avatars2.githubusercontent.com/u/41493792?s=400&u=d55d8a934c12a5a11c0618657aa60e2efb5e89d4&v=4"
            alt="Alex Lee"
            size="small"
          />
        </Box>
        <Box textAlign="left">
          <Paragraph>
            Lorem ipsum Exercitation culpa qui dolor consequat exercitation
            fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
            sunt id pariatur Duis laboris amet exercitation veniam labore
            consectetur ea id quis eiusmod.
          </Paragraph>
        </Box>
      </Columns>
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
      <Box direction="row" justify="center">
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
