import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import SectionHeading from '../SectionHeading'
import { sections } from '../../config.json'
import PortfolioItem from './PortfolioItem'

const portfolio = sections.find(({ title }) => title === 'Portfolio')

const Portfolio = ({ navRef, size }) => (
  <Box
    align="center"
    fill="horizontal"
    gap="medium"
    id="Portfolio"
    justify="center"
    pad="large"
    ref={navRef}
  >
    <SectionHeading
      heading={portfolio.heading}
      size={size}
      subHeading={portfolio.subHeading}
    />
    {portfolio.works.map(({ column1, column2 }, i) => {
      return (
        <Box
          align="start"
          direction={size === 'small' ? 'column' : 'row'}
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
            size={size}
            source={column1.source}
            title={column1.title}
          />
          <PortfolioItem
            category={column2.category}
            description={column2.description}
            image={column2.image}
            languages={column2.languages}
            link={column2.link}
            size={size}
            source={column2.source}
            title={column2.title}
          />
        </Box>
      )
    })}
  </Box>
)

Portfolio.propTypes = {
  navRef: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
}

export default Portfolio
