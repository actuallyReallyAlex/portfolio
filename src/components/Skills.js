import React from 'react'
import { Box, Heading, Label, Paragraph } from 'grommet'
import LanguagesLegend from './LanguagesLegend'

const Skills = () => {
  return (
    <Box pad={{ vertical: 'small', horizontal: 'large' }}>
      <Box direction="row" justify="center">
        <Box pad={{ vertical: 'small' }}>
          <Heading tag="h3">Skills</Heading>
          <Paragraph>
            As a self-taught developer, I've gained a variety of skillsets that
            I can apply to my projects. Currently, I'm focused on React.js. With
            an industry that's ever-evolving, no one is a master at every
            language. I aim to let my excitement for learning new things guide
            me in my path toward growth.
          </Paragraph>
        </Box>
      </Box>
      <Box size={{ width: { max: 'xxlarge' } }} direction="row">
        <Box pad={{ horizontal: 'small', vertical: 'large' }}>
          <Label>HTML</Label>
          <LanguagesLegend languages={['HTML5', 'JSX', 'MDX', 'Markdown']} />
        </Box>
        <Box pad={{ horizontal: 'small', vertical: 'large' }}>
          <Label>CSS</Label>
          <LanguagesLegend languages={['CSS3', 'Bootstrap']} />
        </Box>
        <Box pad={{ horizontal: 'small', vertical: 'large' }}>
          <Label>JavaScript</Label>
          <LanguagesLegend
            languages={['JavaScript', 'React.js', 'Node.js', 'JQuery']}
          />
        </Box>
        <Box pad={{ horizontal: 'small', vertical: 'large' }}>
          <Label>Other</Label>
          <LanguagesLegend languages={['C#', 'JSON']} />
        </Box>
        <Box pad={{ horizontal: 'small', vertical: 'large' }}>
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
