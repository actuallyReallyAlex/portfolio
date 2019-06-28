import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Paragraph } from 'grommet'
import { Download } from 'grommet-icons'
import SectionHeading from '../SectionHeading'
import { education, experience, resume } from '../../config.json'
import TimelineItem from './TimelineItem'

const Resume = ({ navRef, size }) => {
  return (
    <Box
      align="center"
      fill="horizontal"
      gap="medium"
      id="Résumé"
      justify="center"
      pad="large"
      ref={navRef}
    >
      <SectionHeading
        heading="RÉSUMÉ"
        size={size}
        subHeading="More of my credentials"
      />
      <Paragraph>{resume.copy}</Paragraph>
      <Button
        href={resume.url}
        icon={<Download />}
        label="Résumé"
        pad="xlarge"
        primary
      />
      <Box
        margin={
          size === 'small' ? { top: 'large', bottom: '-20px' } : undefined
        }
      >
        <SectionHeading size={size} subHeading="Work Experience" />
      </Box>
      <Box
        fill="horizontal"
        gap="small"
        margin={
          size === 'small' ? { vertical: 'xsmall' } : { vertical: 'medium' }
        }
      >
        {experience.map((props, i) => (
          <TimelineItem key={i} {...props} size={size} />
        ))}
      </Box>
      <Box
        margin={
          size === 'small' ? { top: 'large', bottom: '-20px' } : undefined
        }
      >
        <SectionHeading size={size} subHeading="Education" />
      </Box>
      <Box
        fill="horizontal"
        gap="small"
        margin={
          size === 'small' ? { vertical: 'xsmall' } : { vertical: 'medium' }
        }
      >
        {education.map((props, i) => (
          <TimelineItem key={i} {...props} size={size} />
        ))}
      </Box>
    </Box>
  )
}

Resume.propTypes = {
  navRef: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
}

export default Resume
