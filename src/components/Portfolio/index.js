import React from 'react'
import { Box } from 'grommet'
import SectionHeading from '../SectionHeading'
import { portfolio } from '../../config.json'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <Box
      align="center"
      fill="horizontal"
      gap="medium"
      id="Portfolio"
      justify="center"
      pad="large"
    >
      <SectionHeading
        heading={portfolio.heading}
        subHeading={portfolio.subHeading}
      />
      {portfolio.rows.map(({ column1, column2 }, i) => {
        return (
          <Box
            align="start"
            direction="row"
            fill="horizontal"
            justify="center"
            key={i}
            gap="xlarge"
            margin={{ vertical: 'large' }}
          >
            <PortfolioItem
              category={column1.category}
              description={column1.description}
              image={column1.image}
              languages={column1.languages}
              link={column1.link}
              source={column1.source}
              title={column1.title}
            />
            <PortfolioItem
              category={column2.category}
              description={column2.description}
              image={column2.image}
              languages={column2.languages}
              link={column2.link}
              source={column2.source}
              title={column2.title}
            />
          </Box>
        )
      })}
    </Box>
  )
}

export default Portfolio
