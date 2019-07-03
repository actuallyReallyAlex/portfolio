import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'

const PortfolioItemBody = ({ description, languages }) => {
  return (
    <Fragment>
      <Box margin={{ vertical: 'medium' }}>
        {languages.map(({ color, title }, i) => (
          <Box
            align="center"
            direction="row"
            gap="small"
            key={i}
            justify="start"
          >
            <Box background={color} height="10px" width="10px" />
            <Text margin="none" weight="bold">
              {title}
            </Text>
          </Box>
        ))}
      </Box>
      <Box fill="horizontal">
        <Text>{description}</Text>
      </Box>{' '}
    </Fragment>
  )
}

PortfolioItemBody.propTypes = {
  description: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired
}

export default PortfolioItemBody
