import React from 'react'
import PropTypes from 'prop-types'
import { Tile } from 'grommet'
import Tilt from 'react-tilt'

const Tilty = props => {
  return (
    <Tilt
      className="Tilt"
      options={
        props.portfolioItem
          ? { max: 15, perspective: 2000, scale: 1.05 }
          : props.options
      }
    >
      <div className="Tilt-inner">
        {props.portfolioItem ? (
          <Tile pad="large">{props.item}</Tile>
        ) : (
          props.item
        )}{' '}
      </div>
    </Tilt>
  )
}

Tilty.defaultProps = {
  item: <h1>Tilt Item</h1>,
  portfolioItem: false,
  options: {}
}

Tilty.propTypes = {
  item: PropTypes.element,
  portfolioItem: PropTypes.bool,
  options: PropTypes.object
}

export default Tilty
