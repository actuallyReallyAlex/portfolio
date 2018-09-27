import React, { Component } from 'react'
import {
  Section,
  Box,
  Form,
  FormField,
  TextInput,
  Footer,
  Button,
  Toast
} from 'grommet'
import SectionHeader from '../components/SectionHeader'

class Contact extends Component {
  state = { formSubmitted: false }

  /**
   * Displays Toast.
   */
  showToast = () => {
    this.setState({ formSubmitted: true })
  }

  /**
   * Allows form to be reset and submitted again.
   */
  resetContactState = () => {
    this.setState({ formSubmitted: false })
  }

  render() {
    // If the form has been submitted
    // Show Toast
    if (this.state.formSubmitted) {
      return (
        <Section>
          <Toast status="ok" onClose={this.resetContactState}>
            Your message has been sent. Thanks! I will be in touch with you
            soon.
          </Toast>
          <SectionHeader
            title="Contact"
            subtitle="I'd love to hear from you."
          />
          <Box align="center">
            <Form
              data-netlify="true"
              name="Contact Form"
              id="contact-form"
              onSubmit={e => {
                e.preventDefault()
                e.target.reset()
                this.showToast()
              }}
            >
              <FormField label="Name">
                <TextInput />
              </FormField>
              <FormField label="Email">
                <TextInput />
              </FormField>
              <FormField label="Message">
                <textarea
                  rows="5"
                  type="text"
                  id="description"
                  name="description"
                  onChange={e => {
                    this._change(e)
                  }}
                />
              </FormField>
              <Footer primary={false} pad={{ vertical: 'medium' }}>
                <Button type="submit" label="Send" />
              </Footer>
            </Form>
          </Box>
        </Section>
      )
    } else {
      return (
        <Section>
          <SectionHeader
            title="Contact"
            subtitle="I'd love to hear from you."
          />
          <Box align="center">
            <Form
              data-netlify="true"
              name="Contact Form"
              id="contact-form"
              onSubmit={e => {
                e.preventDefault()
                e.target.reset()
                this.showToast()
              }}
            >
              <FormField label="Name">
                <TextInput />
              </FormField>
              <FormField label="Email">
                <TextInput />
              </FormField>
              <FormField label="Message">
                <textarea rows="5" type="text" />
              </FormField>
              <Footer primary={false} pad={{ vertical: 'medium' }}>
                <Button type="submit" label="Send" />
              </Footer>
            </Form>
          </Box>
        </Section>
      )
    }
  }
}

export default Contact
