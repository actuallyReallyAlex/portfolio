import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PortfolioDocs = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="accent-1"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538333594/portfolio/docs.png'
        }
        heading="Portfolio Docs"
        label="Documentation"
        description={
          <PortfolioItemDescription
            languages={['MDX', 'JSX', 'JavaScript']}
            description="Documentation for this portfolio - complete with custom component library. Built with Docz."
            sourceLink="https://github.com/alexlee-dev/portfolio/tree/master/src/documentation/src"
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
