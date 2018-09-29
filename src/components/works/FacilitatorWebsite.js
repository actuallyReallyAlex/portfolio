import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const FacilitatorWebsite = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/facilitator-website.png'
        }
        heading="SuperCamp Facilitator Page"
        label="Website"
        description={
          <PortfolioItemDescription
            languages={['HTML', 'CSS', 'JavaScript']}
            description="A staff showcase for SuperCamp."
          />
        }
        link={
          <Anchor
            href="http://www.supercamp.com/our-staff/"
            icon={<LinkNext />}
            label="www.supercamp.com/our-staff"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default FacilitatorWebsite
