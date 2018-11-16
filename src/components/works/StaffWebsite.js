import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const StaffWebsite = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538178276/portfolio/staff-website.png"
            alt="Screeshot of Staff Website."
            className="lazyload"
          />
        }
        heading="SuperCamp Staff Page"
        label="Website"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A staff website for SuperCamp. Helps with recruitment, marketing, and revamping a much older website. Built on WordPress"
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
