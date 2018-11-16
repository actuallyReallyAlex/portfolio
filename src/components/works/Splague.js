import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Splague = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177964/portfolio/splague.png"
            alt="Screeshot of Splague documentation."
            className="lazyload"
          />
        }
        heading="splague"
        label="Game"
        description={
          <PortfolioItemDescription
            languages={['React.js']}
            description="Be prepared. A web game built with React, inspired by the popular game 'Plague Inc'. Control either a disease, or a doctor to destroy or save the world."
            sourceLink="https://github.com/alexlee-dev/splague"
          />
        }
        link={
          <Anchor
            href="https://www.splague.com/"
            icon={<LinkNext id="portfolio-link" />}
            label="www.splague.com"
            target="_blank"
            rel="noreferrer"
            id="portfolio-link"
          />
        }
      />
    </Tile>
  )
}

export default Splague
