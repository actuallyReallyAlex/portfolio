import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Pickitt = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177964/portfolio/pickitt.png'
        }
        heading="Pickitt"
        label="Utility"
        description={
          <PortfolioItemDescription
            languages={['Node.js', 'JavaScript']}
            description="When you need you need a computer to just pick it, reach for Pickitt! A JavaScript utility."
            sourceLink="https://github.com/alexlee-dev/pickitt"
          />
        }
        link={
          <Anchor
            href="https://pickitt.netlify.com/"
            icon={<LinkNext />}
            label="www.pickitt.netlify.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Pickitt
