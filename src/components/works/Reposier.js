import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/reposier.png'

const Reposier = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="reposier"
        label="CLI"
        description="Tasty CLI on the outside, simple integration with GitHub's API on the inside."
        link={
          <Anchor
            href="https://www.reposier.com/"
            icon={<LinkNext />}
            label="www.reposier.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Reposier
