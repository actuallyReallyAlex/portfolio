import React, { Component } from 'react'
import { Section, Box, Toast } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

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
    this.setState({ formSubmitted: false, emailSent: false })
  }

  /**
   * Sends email through EmailJS.
   */
  sendEmail = templateId => {
    window.emailjs
      .sendForm('mailjet', templateId, document.getElementById('contact-form'))
      .then(res => {
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
            <ContactForm
              sendEmail={this.sendEmail}
              showToast={this.showToast}
            />
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
            <ContactForm
              sendEmail={this.sendEmail}
              showToast={this.showToast}
            />
          </Box>
        </Section>
      )
    }
  }
}

export default Contact
