import React from 'react'
import { Box, Button, Paragraph } from 'grommet'
import { Download } from 'grommet-icons'
import SectionHeading from '../SectionHeading'
import { education, experience, resume } from '../../config.json'
import TimelineItem from './TimelineItem'

const Resume = ({ navRef }) => {
  return (
    <Box
      align="center"
      fill="horizontal"
      gap="medium"
      id="Résumé"
      justify="center"
      pad="large"
      ref={navRef}
    >
      <SectionHeading heading="RÉSUMÉ" subHeading="More of my credentials" />
      <Paragraph>{resume.copy}</Paragraph>
      <Button href={resume.url} icon={<Download />} label="Résumé" primary />
      <SectionHeading subHeading="Work Experience" />
      <Box fill="horizontal" gap="small" margin={{ vertical: 'medium' }}>
        {experience.map((props, i) => (
          <TimelineItem key={i} {...props} />
        ))}
      </Box>
      <SectionHeading subHeading="Education" />
      <Box fill="horizontal" gap="small" margin={{ vertical: 'medium' }}>
        {education.map((props, i) => (
          <TimelineItem key={i} {...props} />
        ))}
      </Box>
    </Box>
  )
}

export default Resume
