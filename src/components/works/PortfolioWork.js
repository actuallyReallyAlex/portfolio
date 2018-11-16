import React from 'react'
import { Tile, Card } from 'grommet'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PortfolioWork = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="accent-1"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538331503/portfolio/portfolio.png"
            alt="Screeshot of Portfolio site."
            className="lazyload"
          />
        }
        heading="Portfolio"
        label="Portfolio"
        description={
          <PortfolioItemDescription
            languages={['React.js', 'JavaScript', 'Grommet']}
            description="A portfolio build with React.js - an attempt to get away from repeated Bootstrap template portfolios. Also a chance to try out Grommet."
            sourceLink="https://github.com/alexlee-dev/portfolio"
          />
        }
      />
    </Tile>
  )
}

export default PortfolioWork
