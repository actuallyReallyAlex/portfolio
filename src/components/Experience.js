import React from 'react'
import { Box, Heading } from 'grommet'
import TimelineItem from './TimelineItem'

const Experience = () => {
  return (
    <Box>
      <Box justify="center" textAlign="center">
        <Heading tag="h3" strong>
          Work Experience
        </Heading>
      </Box>
      <Box direction="column" pad="large">
        <TimelineItem
          title="Web Developer"
          startDate="Summer 2016"
          present
          icon="code"
          subtitle="Quantum Learning Network"
          summary="Developed an integrated payroll information system for site administrators. Spearheaded a new staff branding by redesigning staff website for SuperCamp. Improved hiring efficiency by developing an employee contracting tool."
        />
        <TimelineItem
          title="HR Specialist"
          startDate="Spring 2016"
          present
          subtitle="Quantum Learning Network"
          summary="Produced and designed monthly HTML newsletters. Shaped an improved interview process by interviewing over 100 employees yearly. Increased user reach by creating video and photo series for media campaigns."
        />
      </Box>
      <Box justify="center" textAlign="center">
        <Heading tag="h3" strong>
          Education
        </Heading>
      </Box>
      <Box direction="column" pad="large">
        <TimelineItem
          title="Bachelor of Science"
          startDate=""
          present
          icon="book"
          subtitle="Portland State University"
          summary="Currently pursuing a Bachelor of Science in Biology."
        />
        <TimelineItem
          title="Associate's Degree"
          startDate=""
          endDate="June 2016"
          icon="book"
          subtitle="MiraCosta College"
          summary="Biology Major with lab experience in Organic Chemistry, Molecular & Evolutionary Biology, and Foundational Physics."
        />
      </Box>
    </Box>
  )
}

export default Experience
