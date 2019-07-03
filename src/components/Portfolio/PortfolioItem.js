import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Tilt from 'react-tilt'
import PortfolioItemFooter from './PortfolioItemFooter'
import PortfolioItemBody from './PortfolioItemBody'
import PortfolioItemHeader from './PortfolioItemHeader'

const PortfolioItem = ({
  category,
  description,
  image,
  languages,
  link,
  size,
  source,
  title
}) => (
  <Tilt className="Tilt" options={{ max: 15, perspective: 2000, scale: 1.05 }}>
    <Box
      background="#5252d4"
      className="Tilt-inner"
      elevation="large"
      width={size === 'small' ? '300' : '384px'}
    >
      <Box
        background={`url(${image})`}
        height="189px"
        width={size === 'small' ? '300' : '384px'}
      />
      <Box pad="medium">
        <PortfolioItemHeader category={category} title={title} />
        <PortfolioItemBody description={description} languages={languages} />
        <PortfolioItemFooter link={link} source={source} />
      </Box>
    </Box>
  </Tilt>
)

PortfolioItem.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  link: PropTypes.object,
  size: PropTypes.string.isRequired,
  source: PropTypes.object,
  title: PropTypes.string.isRequired
}

export default PortfolioItem
