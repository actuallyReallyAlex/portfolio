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
        summary="Lorem ipsum Exercitation culpa qui dolor consequat exercitation
            fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
            sunt id pariatur Duis laboris amet exercitation veniam labore
            consectetur ea id quis eiusmod."
      />
      <Experience />
    </Section>
  )
}

export default Resume
