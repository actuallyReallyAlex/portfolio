import React from 'react'
import { Box, Heading } from 'grommet'
import { about } from '../../config.json'
import SkillBox from './SkillBox.js'

const Skills = () => {
  return (
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
            <SkillBox color={color} key={i} title={title} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Skills
