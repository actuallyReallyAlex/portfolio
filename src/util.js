import sanityClient from '@sanity/client'

export const smoothlyScroll = elementId => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.log(`Could not locate element: ${elementId}`)
  }
}

/**
 * Submits the contact form.
 * @param {Function} setStatus
 * @param {Object} formValues
 */
export const submitContactForm = (setStatus, formValues) => {
  try {
    setStatus('SENDING')
    const { name, email, message } = formValues
    const contactFormEntry = {
      _type: 'contactFormEntry',
      name,
      email,
      message
    }
    const readClient = sanityClient({
      projectId: 'bzx328dj',
      dataset: 'production',
      useCdn: true
    })

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
