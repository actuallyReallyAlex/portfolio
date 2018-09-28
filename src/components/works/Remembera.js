import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

const Remembera = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/remembera.png'}
        heading="Remembera"
        label="Documentation"
        description="A knowledge bank."
        link={
          <Anchor
            href="https://www.remembera.info/"
            icon={<LinkNext />}
            label="www.remembera.info"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Remembera
