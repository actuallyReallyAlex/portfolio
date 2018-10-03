import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Splague = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/splague.png'
        }
        heading="splague"
        label="Game"
        description={
          <PortfolioItemDescription
            languages={['React.js']}
            description="Be prepared. A web game built with React, inspired by the popular game 'Plague Inc'. Control either a disease, or a doctor to destroy or save the world."
          />
        }
        link={
          <Anchor
            href="https://www.splague.com/"
            icon={<LinkNext />}
            label="www.splague.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Splague
