import React from 'react'
import { Tile, Card } from 'grommet'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PortfolioWork = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="accent-1"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538331503/portfolio/portfolio.png'
        }
        heading="Portfolio"
        label="Portfolio"
        description={
          <PortfolioItemDescription
            languages={['React.js', 'JavaScript', 'Grommet']}
            description="A portfolio build with React.js - an attempt to get away from repeated Bootstrap template portfolios. Also a chance to try out Grommet."
          />
        }
      />
    </Tile>
  )
}

export default PortfolioWork
