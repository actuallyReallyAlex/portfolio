import React from 'react'
import { Box, Button } from 'grommet'
import { contact } from '../config.json'
import SectionHeading from '../components/SectionHeading'
import useForm from 'react-hook-form'
import { Send } from 'grommet-icons'

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => console.log({ data })

  console.log(watch('example'))

  return (
    <Box
      align="center"
      fill="horizontal"
      gap="medium"
      justify="center"
      pad="large"
    >
      <SectionHeading
        heading={contact.heading}
        subHeading={contact.subHeading}
      />
      <form
        acceptCharset="UTF-8"
        action="https://formcarry.com/s/2PUXVUZVZKi"
        method="POST"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <input type="email" name="email" />
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="text" name="anotherInput" />
        <input type="hidden" name="_gotcha" />
        {/* <input
          type="hidden"
          name="_subject"
          value="New Submission From Portfolio Contact Form"
        />
        <input
          aria-label="Name"
          name="name"
          placeholder="Name"
          ref={register({ required: true })}
          required
          type="text"
        />
        <input
          aria-label="Email"
          name="_replyto"
          placeholder="Email"
          required
          type="email"
        />
        <textarea
          aria-label="Message"
          name="message"
          placeholder="Message"
          required
          rows="8"
          style={{ resize: 'vertical' }}
          type="text"
        /> */}
        <Button icon={<Send />} label="Send" primary type="submit" />
      </form>
    </Box>
  )
}

export default Contact

// return (
//   {/* handleSubmit will validation your inputs before invoking onSubmit */}
//   <form onSubmit={handleSubmit(onSubmit)}>
//     {/* register your input into Hook by invoking the register function */}
//     <input type="text" name="example" defaultValue="test" ref={register} />

//     {/* include validation with required or other standard HTML validation rules */}
//     <input type="text" name="exampleRequired" ref={register({ required: true })} />
//     {/* errors will return when field validation fails  */}
//     {errors.example && '<span>This field is required</span>'}

//     <input type="submit" />
//   </form>
// )
