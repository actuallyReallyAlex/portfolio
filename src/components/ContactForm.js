import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormField, TextInput, Footer, Button } from 'grommet'

const ContactForm = props => {
  return (
    <Form
      name="Contact Form"
      id="contact-form"
      onSubmit={e => {
        e.preventDefault()
        props.sendEmail(process.env.REACT_APP_EMAILJS_TEMPLATEID)
        e.target.reset()
        props.showToast()
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
  )
}

ContactForm.proptTypes = {
  sendEmail: PropTypes.func.isRequired,
  showToast: PropTypes.func.isRequired
}

export default ContactForm
