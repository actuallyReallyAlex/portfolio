import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/remembera.png'

const Remembera = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
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
