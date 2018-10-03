import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PortfolioDocs = () => {
  return (
    <Tile>
      <Card
        colorIndex="accent-1"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538333594/portfolio/docs.png'
        }
        heading="Portfolio Docs"
        label="Documentation"
        description={
          <PortfolioItemDescription
            languages={['MDX', 'JSX', 'JavaScript']}
            description="Documentation for this portfolio - complete with custom component library. Built with Docz."
          />
        }
        link={
          <Anchor
            href="https://alexlee-portfolio-docs.netlify.com"
            icon={<LinkNext />}
            label="Docs"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default PortfolioDocs
