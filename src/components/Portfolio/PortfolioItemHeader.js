import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'grommet'

const PortfolioItemHeader = ({ category, title }) => {
  return (
    <Fragment>
      <Text size="medium">{category}</Text>
      <Text size="xlarge" weight="bold">
        {title}
      </Text>
    </Fragment>
  )
}

PortfolioItemHeader.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PortfolioItemHeader
