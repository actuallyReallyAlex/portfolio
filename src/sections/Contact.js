import React, { Component } from 'react'
import { Section, Box, Toast } from 'grommet'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

// TODO: Clean up Validation

class Contact extends Component {
  state = {
    formSubmitted: false,
    emailSent: false,
    isValid: null,
    errors: {
      name: {
        isValid: null
      },
      email: {
        isValid: null
      },
      message: {
        isValid: null
      }
    }
  }

  validate = data => {
    let temp = {
      name: {
        isValid: null
      },
      email: {
        isValid: null
      },
      message: {
        isValid: null
      }
    }

    let tempIsValid = null

    /**
     * Tells if an input is equal to '' or not.
     * @param {String} input Input to check.
     * @param {Object} errorValue The object corresponding to the error in the 'errors' variable.
     * @returns {Boolean} Returns a boolean, true or false.
     */
    const isBlank = (input, errorValue) => {
      // If input is blank
      if (input === '') {
        errorValue.isValid = false
        return true
      } else {
        // If input is not blank
        errorValue.isValid = true
        return false
      }
    }

    /**
     * Tells if an input is equal to a simple email regex or not.
     * @param {String} input Input to check.
     * @param {Object} errorValue The object corresponding to the error in the 'errors' variable.
     * @returns {Boolean} Returns a boolean, true or false.
     */
    const isNotAnAddress = (input, errorValue) => {
      const regex = new RegExp('.+@.+..+')

      // If input does not match regex
      if (!regex.test(input)) {
        errorValue.isValid = false
        return true
      } else {
        // If input does match regex
        errorValue.isValid = true
        return false
      }
    }

    // Name Validation
    if (isBlank(data.name, temp.name)) {
      tempIsValid = false
    } else {
      temp.name.isValid = true
    }

    // Email Validation
    if (isBlank(data.email, temp.email)) {
      tempIsValid = false
    } else {
      if (isNotAnAddress(data.email, temp.email)) {
        tempIsValid = false
      } else {
        temp.email.isValid = true
      }
    }

    // Message Validation
    if (isBlank(data.message, temp.message)) {
      tempIsValid = false
    } else {
      temp.message.isValid = true
    }

    if (tempIsValid === null) {
      tempIsValid = true
      this.sendEmail(process.env.REACT_APP_EMAILJS_TEMPLATEID)
      const form = document.getElementById('contact-form')
      form.reset()
    }

    this.setState({ errors: temp, isValid: tempIsValid })
    this.showToast()
  }

  resetError = newErrorsObj => {
    this.setState({ errors: newErrorsObj })
  }

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
    this.setState({
      formSubmitted: false,
      emailSent: false,
      isValid: false,
      errors: {
        name: {
          isValid: null
        },
        email: {
          isValid: null
        },
        message: {
          isValid: null
        }
      }
    })
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

  SuccessToast = () => {
    return (
      <Toast status="ok" onClose={this.resetContactState}>
        Your message has been sent. Thanks! I will be in touch with you soon.
      </Toast>
    )
  }

  FailToast = () => {
    return (
      <Toast status="critical" onClose={this.resetContactState}>
        Unofortunately, one or more of the form fields were not valid. Please
        try again.
      </Toast>
    )
  }

  BlankContactSection = props => {
    return (
      <Section id="contact">
        {props.toast === 'success' ? <this.SuccessToast /> : null}
        {props.toast === 'fail' ? <this.FailToast /> : null}
        <SectionHeader title="Contact" subtitle="I'd love to hear from you." />
        <Box pad="large" align="center">
          <ContactForm
            validate={this.validate}
            errors={this.state.errors}
            resetError={this.resetError}
          />
        </Box>
      </Section>
    )
  }

  render() {
    if (this.state.formSubmitted) {
      if (this.state.isValid) {
        return <this.BlankContactSection toast="success" />
      } else {
        return <this.BlankContactSection toast="fail" />
      }
    } else {
      return <this.BlankContactSection />
    }
  }
}

export default Contact
