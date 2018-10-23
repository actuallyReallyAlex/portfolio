import React from 'react'
import { Box, Button } from 'grommet'
import SendIcon from 'grommet/components/icons/base/Send'

const ContactForm = () => {
  return (
    <Box size="large">
      <form action="https://formspree.io/alex@alex-lee.site" method="POST">
        <input
          type="hidden"
          name="_subject"
          value="New Submission From Portfolio Contact Form"
        />
        <Box pad={{ vertical: 'none' }}>
          <input required type="text" name="name" placeholder="Name" />
        </Box>
        <Box pad={{ vertical: 'small' }}>
          <input required type="email" name="_replyto" placeholder="Email" />
        </Box>
        <Box pad={{ vertical: 'none' }}>
          <textarea
            required
            style={{ resize: 'vertical' }}
            type="text"
            name="message"
            placeholder="Message"
            rows="8"
          />
        </Box>
        <Box direction="row" justify="center">
          <Box
            direction="row"
            justify="center"
            size="small"
            pad={{ vertical: 'small' }}
          >
            <Button icon={<SendIcon />} label="Send" type="submit" />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default ContactForm
