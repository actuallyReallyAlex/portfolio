import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Reposier = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/reposier.png'
        }
        heading="reposier"
        label="CLI"
        description={
          <PortfolioItemDescription
            languages={['Node.js', 'JavaScript']}
            description="Tasty CLI on the outside, simple integration with GitHub's API on the inside."
          />
        }
        link={
          <Anchor
            href="https://www.reposier.com/"
            icon={<LinkNext />}
            label="www.reposier.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Reposier
