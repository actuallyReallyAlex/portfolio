import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Reposier = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177964/portfolio/reposier.png"
            alt="Screeshot of Reposier documentation."
            className="lazyload"
          />
        }
        heading="reposier"
        label="CLI"
        description={
          <PortfolioItemDescription
            languages={['Node.js', 'JavaScript']}
            description="Tasty CLI on the outside, simple integration with GitHub's API on the inside."
            sourceLink="https://github.com/alexlee-dev/reposier"
          />
        }
        link={
          <Anchor
            href="https://www.reposier.com/"
            icon={<LinkNext />}
            label="www.reposier.com"
            target="_blank"
            rel="noreferrer"
          />
        }
      />
    </Tile>
  )
}

export default Reposier
