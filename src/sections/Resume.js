import React from 'react'
import { Box, Button, Paragraph, Heading, Text } from 'grommet'
import { Download } from 'grommet-icons'
import { resume } from '../config.json'
import SectionHeading from '../components/SectionHeading'
import { education, experience } from '../config.json'
import * as icons from 'grommet-icons'

const Resume = () => {
  return (
    <Box
      align="center"
      fill="horizontal"
      gap="medium"
      id="Résumé"
      justify="center"
      pad="large"
    >
      <SectionHeading heading="RÉSUMÉ" subHeading="More of my credentials" />
      <Paragraph>{resume.copy}</Paragraph>
      <Button href={resume.url} icon={<Download />} label="Résumé" primary />
      <SectionHeading subHeading="Work Experience" />
      <Box fill="horizontal" gap="small" margin={{ vertical: 'medium' }}>
        {experience.map(
          (
            { title, startDate, endDate, present, icon, company, summary },
            i
          ) => {
            const Icon = icons[icon]

            return (
              <Box
                align="start"
                direction="row"
                fill="horizontal"
                gap="xlarge"
                key={i}
                justify="center"
              >
                <Box style={{ textAlign: 'right' }} width="30%">
                  <Heading level="3">{title}</Heading>
                  <Text>
                    {startDate} - {present ? 'Present' : endDate}
                  </Text>
                </Box>
                <Box align="center" pad="medium" width="10%">
                  <Icon />
                </Box>
                <Box>
                  <Heading level="4" margin="none">
                    {company}
                  </Heading>
                  <Box
                    background="neutral-3"
                    height="3px"
                    margin={{ top: 'small', bottom: 'medium' }}
                    round="small"
                    width="60%"
                  />
                  <Paragraph>{summary}</Paragraph>
                </Box>
              </Box>
            )
          }
        )}
      </Box>
      <SectionHeading subHeading="Education" />
      <Box fill="horizontal" gap="small" margin={{ vertical: 'medium' }}>
        {education.map(
          (
            { title, startDate, endDate, present, icon, university, summary },
            i
          ) => {
            const Icon = icons[icon]

            return (
              <Box
                align="start"
                direction="row"
                fill="horizontal"
                gap="xlarge"
                key={i}
                justify="center"
              >
                <Box style={{ textAlign: 'right' }} width="30%">
                  <Heading level="3">{title}</Heading>
                  <Text>{present ? 'Present' : endDate}</Text>
                </Box>
                <Box align="center" pad="medium" width="10%">
                  <Icon />
                </Box>
                <Box>
                  <Heading level="4" margin="none">
                    {university}
                  </Heading>
                  <Box
                    background="neutral-3"
                    height="3px"
                    margin={{ top: 'small', bottom: 'medium' }}
                    round="small"
                    width="60%"
                  />
                  <Paragraph>{summary}</Paragraph>
                </Box>
              </Box>
            )
          }
        )}
      </Box>
    </Box>
  )
}

export default Resume
