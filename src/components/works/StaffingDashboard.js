import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const StaffingDashboard = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177965/portfolio/staffing-dashboard.png'
        }
        heading="Staffing Dashboard"
        label="Dashboard"
        description={
          <PortfolioItemDescription
            languages={['HTML', 'CSS', 'JavaScript']}
            description="A fully functional dashboard to help with staffing and recruiting."
          />
        }
        link={
          <Anchor
            href="https://alexlee-dev.github.io/Staffing/index.html"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default StaffingDashboard
