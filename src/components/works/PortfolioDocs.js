import React from 'react'
import { Tile, Card } from 'grommet'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PortfolioDocs = () => {
  return (
    <Tile>
      <Card
        colorIndex="accent-1"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538331957/portfolio/documentation.png'
        }
        heading="Portfolio Docs"
        label="Documentation"
        description={
          <PortfolioItemDescription
            languages={['MDX', 'JSX', 'JavaScript']}
            description="Documentation for this portfolio - complete with custom component library. Built with Docz."
          />
        }
      />
    </Tile>
  )
}

export default PortfolioDocs
