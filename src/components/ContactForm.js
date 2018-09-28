import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  FormField,
  TextInput,
  Footer,
  Button,
  Paragraph,
  Anchor
} from 'grommet'

const ContactForm = props => {
  return (
    <Form
      name="Contact Form"
      id="contact-form"
      onSubmit={e => {
        e.preventDefault()
        const name = document.getElementById('contact-form-name').value
        const email = document.getElementById('contact-form-email').value
        const message = document.getElementById('contact-form-message').value

        const data = { name, email, message }

        props.validate(data)
      }}
    >
      <FormField
        label="Name"
        error={
          props.errors.name.isValid === false ? 'Please enter your name.' : null
        }
      >
        <TextInput
          id="contact-form-name"
          name="name"
          onDOMChange={() => {
            let newErrorsObj = {
              name: {
                isValid: null
              },
              email: {
                isValid: props.errors.email.isValid
              },
              message: {
                isValid: props.errors.message.isValid
              }
            }
            props.resetError(newErrorsObj)
          }}
        />
      </FormField>
      <FormField
        label="Email"
        error={
          props.errors.email.isValid === false
            ? 'Please enter a valid email address.'
            : null
        }
      >
        <TextInput
          id="contact-form-email"
          name="email"
          onDOMChange={() => {
            let newErrorsObj = {
              name: {
                isValid: props.errors.name.isValid
              },
              email: {
                isValid: null
              },
              message: {
                isValid: props.errors.message.isValid
              }
            }
            props.resetError(newErrorsObj)
          }}
        />
      </FormField>
      <FormField
        label="Message"
        error={
          props.errors.message.isValid === false
            ? 'Please enter a message.'
            : null
        }
      >
        <textarea
          rows="5"
          type="text"
          id="contact-form-message"
          name="message"
          onChange={() => {
            let newErrorsObj = {
              name: {
                isValid: props.errors.name.isValid
              },
              email: {
                isValid: props.errors.email.isValid
              },
              message: {
                isValid: null
              }
            }
            props.resetError(newErrorsObj)
          }}
        />
      </FormField>
      <Paragraph size="small">
        Form submissions are sent to my email using{' '}
        <Anchor
          target="_blank"
          label="EmailJS"
          href="http://www.emailjs.com/"
        />
        .
      </Paragraph>
      <Footer primary={false} pad={{ vertical: 'none' }}>
        <Button type="submit" label="Send" />
      </Footer>
    </Form>
  )
}

ContactForm.proptTypes = {
  validate: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default ContactForm
