import React from 'react'
import PropTypes from 'prop-types'
import { Anchor, Box } from 'grommet'
import { Code, LinkNext } from 'grommet-icons'

const PortfolioItemFooter = ({ link, source }) => {
  return (
    <Box margin={{ top: 'medium' }}>
      {source && (
        <Box direction="row" gap="small">
          <Anchor
            color="white"
            href={source.href}
            icon={<Code />}
            label={source.title}
            rel="noreferrer"
            target="_blank"
          />
        </Box>
      )}
      {link && (
        <Box direction="row" gap="small">
          <Anchor
            color="white"
            href={link.href}
            icon={<LinkNext />}
            label={link.title}
            rel="noreferrer"
            target="_blank"
          />
        </Box>
      )}
    </Box>
  )
}

PortfolioItemFooter.propTypes = {
  link: PropTypes.object,
  source: PropTypes.object
}

export default PortfolioItemFooter
