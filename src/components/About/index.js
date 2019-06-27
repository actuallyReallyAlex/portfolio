import React from 'react'
import { Box, Paragraph, Heading, Text } from 'grommet'
import SectionHeading from '../SectionHeading'
import { about } from '../../config.json'

const About = () => {
  return (
    <Box
      align="center"
      fill="horizontal"
      id="About"
      justify="center"
      pad="large"
    >
      <SectionHeading heading="About" subHeading="Let me introduce myself." />
      <Box
        align="center"
        direction="row"
        fill="horizontal"
        gap="xlarge"
        justify="center"
        margin={{ vertical: 'large' }}
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
      <Box
        align="start"
        direction="row"
        fill="horizontal"
        gap="xlarge"
        justify="center"
        margin={{ vertical: 'large' }}
      >
        <Box>
          <Heading level="3">Profile</Heading>
          <Paragraph>{about.profile}</Paragraph>
        </Box>
        <Box>
          <Heading className="uppercase" level="3" margin="none">
            Full Name:
          </Heading>
          <Text margin={{ bottom: 'small' }}>{about.fullName}</Text>
          <Heading className="uppercase" level="3" margin="none">
            Job:
          </Heading>
          <Text margin={{ bottom: 'small' }}>{about.job}</Text>
          <Heading className="uppercase" level="3" margin="none">
            Email:
          </Heading>
          <Text>{about.email}</Text>
        </Box>
      </Box>
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
      <Box
        align="start"
        direction="row"
        fill="horizontal"
        gap="xlarge"
        justify="center"
        margin={{ vertical: 'large' }}
      >
        {about.skills.map(({ sectionTitle, languages }, i) => (
          <Box align="start" key={i} justify="start">
            <Box align="center" fill="horizontal">
              <Heading level="3">{sectionTitle}</Heading>
            </Box>
            {languages.map(({ color, title }, i) => (
              <Box
                align="center"
                direction="row"
                gap="small"
                key={i}
                justify="center"
              >
                <Box background={color} height="10px" width="10px" />
                <Heading level="4" margin="none">
                  {title}
                </Heading>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default About
