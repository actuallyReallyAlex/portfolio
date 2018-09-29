import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const StaffWebsite = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538178276/portfolio/staff-website.png'
        }
        heading="SuperCamp Staff Page"
        label="Website"
        description={
          <PortfolioItemDescription
            languages={['HTML', 'CSS', 'JavaScript']}
            description="A staff website for SuperCamp."
          />
        }
        link={
          <Anchor
            href="http://www.supercamp.com/staff/"
            icon={<LinkNext />}
            label="www.supercamp.com/staff"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default StaffWebsite
