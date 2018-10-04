import React from 'react'
import { Section, Box, Button } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import Experience from '../components/Experience'
import DocumentDownload from 'grommet/components/icons/base/DocumentDownload'

const Resume = () => {
  return (
    <Section id="resume">
      <SectionHeader
        title="Résumé"
        subtitle="More of my credentials."
        summary="With a &#8220;can do&#8221; attitude and a determination to put my best work into fruition, I can be a positive asset to any team."
      />
      <Box pad={{ vertical: 'medium' }} responsive={false} direction="row" justify="center">
        <Button
          label="Résumé"
          icon={<DocumentDownload />}
          secondary
          href="https://github.com/alexlee-dev/portfolio/raw/master/src/assets/Resume.pdf"
        />
      </Box>
      <Experience />
    </Section>
  )
}

export default Resume
