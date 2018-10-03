import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Contractor = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177963/portfolio/contractor.png'
        }
        heading="Contractor Tool"
        label="Tool"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A tool used to contract employees. Ability to export important information in a specific format. A part of the Staffing Dashboard."
          />
        }
        link={
          <Anchor
            href="https://demo-staffing-dashboard.netlify.com/contractor.html"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Contractor
