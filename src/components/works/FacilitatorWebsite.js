import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const FacilitatorWebsite = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177964/portfolio/facilitator-website.png"
            alt="Screenshot of Facilitator Website."
            className="lazyload"
          />
        }
        heading="SuperCamp Facilitator Page"
        label="Website"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A staff showcase for SuperCamp. Used to show clients the staff of SuperCamp, and their credentials. Successful marketing campaign."
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
