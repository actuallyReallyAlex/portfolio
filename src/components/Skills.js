import React from 'react'
import { Box, Heading, Label, Paragraph } from 'grommet'
import LanguagesLegend from './LanguagesLegend'

const Skills = () => {
  return (
    <Box>
      <Box pad="large" direction="row" justify="center">
        <Box pad={{ vertical: 'small' }}>
          <Heading tag="h3">Skills</Heading>
          <Paragraph>
            As a self-taught developer, I've gained a variety of skillsets that
            I can apply to my projects. Currently, I'm focused on React.JS. I'm
            eager to put my skills to good use, and continue my love of
            learning.
          </Paragraph>
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
