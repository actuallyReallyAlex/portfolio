import React from 'react'
import { Box, Heading, Label } from 'grommet'
import LoremIpsum from './LoremIpsum'
import LanguagesLegend from './LanguagesLegend'

const Skills = () => {
  return (
    <Box>
      <Box direction="row" justify="center">
        <Box pad={{ vertical: 'small' }}>
          <Heading tag="h3">Skills</Heading>
          <LoremIpsum />
        </Box>
      </Box>
      <Box direction="row">
        <Box pad="large">
          <Label>Programming Languages</Label>
          <LanguagesLegend languages={['JavaScript', 'C#']} />
        </Box>
        <Box pad="large">
          <Label>Not Exactly A Programming Language</Label>
          <LanguagesLegend
            languages={['HTML', 'CSS', 'Markdown', 'MDX', 'JSX', 'JSON']}
          />
        </Box>
        <Box pad="large">
          <Label>Technologies / Frameworks</Label>
          <LanguagesLegend
            languages={['React.js', 'Node.js', 'JQuery', 'Bootstrap']}
          />
        </Box>
        <Box pad="large">
          <Label>Tools / Software</Label>
          <LanguagesLegend
            languages={[
              'MS Visual Studio',
              'Adobe Photoshop',
              'Adobe Illustrator'
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
