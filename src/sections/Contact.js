import React from 'react'
import { Section, Box } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <Section id="contact">
      <SectionHeader title="Contact" subtitle="I'd love to hear from you." />
      <Box pad={{ vertical: 'small' }} align="center">
        <ContactForm />
      </Box>
    </Section>
  )
}

export default Contact
