import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paragraph, Legend, Anchor } from 'grommet'
import Code from 'grommet/components/icons/base/Code'
import { languageProperties, getArrayofLabels } from '../utilities'

const PortfolioItemDescription = props => {
  return (
    <Box>
      <Legend
        className="project"
        series={getArrayofLabels(props.languages, languageProperties)}
      />
      <Paragraph size="large" margin="medium" className="portfolio-desc">
        {props.description}
      </Paragraph>
      {props.sourceLink ? (
        <Anchor
          href={props.sourceLink}
          icon={<Code />}
          label="Source"
          target="_blank"
          rel="noreferrer"
          className="portfolio-source"
          id="portfolio-source"
        />
      ) : null}
    </Box>
  )
}

PortfolioItemDescription.defaultProps = {
  description: 'Example Description',
  languages: ['HTML5', 'CSS3', 'JavaScript'],
  sourceLink: null
}

PortfolioItemDescription.propTypes = {
  /** A short description of the project. */
  description: PropTypes.string.isRequired,
  /** A colorful legend to show which languages were used on the project. */
  languages: PropTypes.array.isRequired,
  /** A link to the source code. */
  sourceLink: PropTypes.string
}

export default PortfolioItemDescription
