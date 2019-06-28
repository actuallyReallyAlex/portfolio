import React from 'react'
import PropTypes from 'prop-types'
import { Anchor, Box, Heading, Text } from 'grommet'
import { Code, LinkNext } from 'grommet-icons'
import Tilt from 'react-tilt'

const PortfolioItem = ({
  category,
  description,
  image,
  languages,
  link,
  size,
  source,
  title
}) => {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 15, perspective: 2000, scale: 1.05 }}
    >
      <Box
        background="brand"
        className="Tilt-inner"
        width={size === 'small' ? '300' : '384px'}
      >
        <Box
          background={`url(${image})`}
          height="189px"
          width={size === 'small' ? '300' : '384px'}
        />
        <Box pad="medium">
          <Text size="medium">{category}</Text>
          <Text size="xlarge" weight="bold">
            {title}
          </Text>
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
                <Heading level="4" margin="none">
                  {title}
                </Heading>
              </Box>
            ))}
          </Box>
          <Box fill="horizontal">
            <Text>{description}</Text>
          </Box>
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
        </Box>
      </Box>
    </Tilt>
  )
}

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
