import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/contractor.png'

const Contractor = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="Contractor Tool"
        label="Tool"
        description="A tool used to contract employees. A part of the Staffing Dashboard."
        link={
          <Anchor
            href="https://alexlee-dev.github.io/Staffing/contractor.html"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Contractor
