import React from 'react'
import { Section } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import Experience from '../components/Experience'

const Resume = () => {
  return (
    <Section id="resume">
      <SectionHeader
        title="Résumé"
        subtitle="More of my credentials."
        summary="With a &#8220;can do&#8221; attitude and a determination to put my best work into fruition, I can be a positive asset to any team."
      />
      <Experience />
    </Section>
  )
}

export default Resume
