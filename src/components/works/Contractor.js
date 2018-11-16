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
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177963/portfolio/contractor.png"
            alt="Screeshot of Contractor Tool."
            className="lazyload"
          />
        }
        heading="Contractor Tool"
        label="Tool"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A tool used to contract employees. Ability to export important information in a specific format. A part of the Staffing Dashboard."
            sourceLink="https://github.com/alexlee-dev/Staffing/blob/master/contractor.html"
          />
        }
        link={
          <Anchor
            href="https://demo-staffing-dashboard.netlify.com/contractor.html"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
            rel="noreferrer"
          />
        }
      />
    </Tile>
  )
}

export default Contractor
