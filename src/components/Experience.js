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
          title="HR Specialist"
          startDate="June 2016"
          present
          icon="analytics"
          subtitle="Quantum Learning Network"
          summary="Responsible for creating web tools to assist the SuperCamp Programs Department grow. Developed an overhaul of a staff website, and introduced new features to the public browsing the SuperCamp homepage. Designed and sent HTML newsletters to staff. Responsible for staffing the SuperCamp summer program - recruitment, interviewing, contracting over 100 new employees every year. Created numerous media campaigns as a key member of the SuperCamp Programs Department."
        />
        <TimelineItem
          title="Administrative Assistant"
          startDate="June 2014"
          endDate="October 2015"
          subtitle="Lincoln Property Management"
          summary="Responsible for the recruitment and interviewing of staff. Coordinated meetings, prepared reports, and actively maintained quality assurance. Communicated with customers, employees, and the public to provide information and address concerns."
        />
        <TimelineItem
          title="Lifeguard Instructor"
          startDate="December 2014"
          endDate="October 2015"
          icon="aid"
          subtitle="Lincoln Property Management"
          summary="American Red Cross certified (Life Guard Instructor, Administering Emergency Oxygen, CPR, AED, First Aid, Lifeguarding, Blood-borne Pathogens, First Aid for Public Safety Personnel). Supervised the safety and rescue of all swimmers and water sports participants."
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
          endDate="June 2017"
          icon="book"
          subtitle="MiraCosta College"
          summary="Biology Major with lab experience in Organic Chemistry, Molecular & Evolutionary Biology, and Foundational Physics."
        />
      </Box>
    </Box>
  )
}

export default Experience
