import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/splague.png'

const Splague = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="splague"
        label="Game"
        description="Be prepared."
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
