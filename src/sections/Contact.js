import React from 'react'
import {
  Section,
  Box,
  Form,
  FormField,
  TextInput,
  Footer,
  Button
} from 'grommet'
import SectionHeader from '../components/SectionHeader'

const Contact = () => {
  return (
    <Section>
      <SectionHeader title="Contact" subtitle="I'd love to hear from you." />
      <Box align="center">
        <Form
          name="Contact Form"
          id="contact-form"
          onSubmit={() => alert('submitted!')}
        >
          <FormField label="Name">
            <TextInput />
          </FormField>
          <FormField label="Email">
            <TextInput />
          </FormField>
          <FormField label="Message">
            <TextInput />
          </FormField>
          <Footer primary={false} pad={{ vertical: 'medium' }}>
            <Button
              type="submit"
              label="Send"
              onClick={() => alert('clicked!')}
            />
          </Footer>
        </Form>
      </Box>
    </Section>
  )
}

export default Contact
