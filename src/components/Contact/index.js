import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import sanityClient from '@sanity/client'
import { Box, Button, Form, FormField, TextArea } from 'grommet'
import { Alert, CloudUpload, Send, Validate } from 'grommet-icons'
import { contact } from '../../config.json'
import SectionHeading from '../SectionHeading.js'

const readClient = sanityClient({
  projectId: 'bzx328dj',
  dataset: 'production',
  useCdn: true
})

const Contact = ({ navRef, size }) => {
  const [status, setStatus] = useState(null)

  const labels = {
    null: 'Send',
    SENDING: 'Sending ...',
    SUCCESS: 'Message sent!',
    ERROR: 'Error!'
  }

  const icons = {
    null: <Send />,
    SENDING: <CloudUpload />,
    SUCCESS: <Validate />,
    ERROR: <Alert />
  }

  const handleSubmit = ({ value }) => {
    setStatus('SENDING')
    const { name, email, message } = value
    const contactFormEntry = {
      _type: 'contactFormEntry',
      name,
      email,
      message
    }

    try {
      readClient
        .getDocument('c8907146-850c-4200-b801-2f8aef04694a')
        .then(({ message }) => {
          const writeClient = sanityClient({
            projectId: 'bzx328dj',
            dataset: 'production',
            token: message,
            useCdn: true
          })

          writeClient.create(contactFormEntry).then(() => {
            setStatus('SUCCESS')
          })
        })
    } catch (error) {
      console.error({ error })
      setStatus('ERROR')
    }
  }

  return (
    <Box
      align="center"
      fill="horizontal"
      id="Contact"
      justify="center"
      pad="large"
      ref={navRef}
    >
      <SectionHeading
        heading={contact.heading}
        size={size}
        subHeading={contact.subHeading}
      />
      <Box width="large">
        <Form onSubmit={handleSubmit}>
          {status === null && (
            <Fragment>
              <FormField
                label="Name"
                name="name"
                placeholder="John Smith"
                required
                type="text"
              />
              <FormField
                label="Email"
                name="email"
                placeholder="john.smith@gmail.com"
                required
                type="text"
              />
              <FormField
                component={TextArea}
                label="Message"
                name="message"
                placeholder="You're hired!"
                required
                type="text"
              />
            </Fragment>
          )}
          <Box align="center" justify="center" margin={{ vertical: 'medium' }}>
            <Button
              color="#5252d4"
              disabled={status !== null}
              icon={icons[status]}
              label={labels[status]}
              primary
              type="submit"
            />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}

Contact.propTypes = {
  navRef: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
}

export default Contact
