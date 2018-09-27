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
  state = { formSubmitted: false, emailSent: false }

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

  sendEmail = templateId => {
    console.log('attempting to send email')
    window.emailjs
      .sendForm('mailjet', templateId, document.getElementById('contact-form'))
      .then(res => {
        console.log(res)
        this.setState({ emailSent: true })
      })
      .catch(err => console.error(err))
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
                this.sendEmail(process.env.REACT_APP_EMAILJS_TEMPLATEID)
                e.target.reset()
                this.showToast()
              }}
            >
              <FormField label="Name">
                <TextInput id="contact-form-name" name="name" />
              </FormField>
              <FormField label="Email">
                <TextInput id="contact-form-email" name="email" />
              </FormField>
              <FormField label="Message">
                <textarea
                  rows="5"
                  type="text"
                  id="contact-form-message"
                  name="message"
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
                this.sendEmail(process.env.REACT_APP_EMAILJS_TEMPLATEID)
                e.target.reset()
                this.showToast()
              }}
            >
              <FormField label="Name">
                <TextInput id="contact-form-name" name="name" />
              </FormField>
              <FormField label="Email">
                <TextInput id="contact-form-email" name="email" />
              </FormField>
              <FormField label="Message">
                <textarea
                  rows="5"
                  type="text"
                  id="contact-form-message"
                  name="message"
                />
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
