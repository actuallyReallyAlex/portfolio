import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

const Pickitt = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/pickitt.png'}
        heading="Pickitt"
        label="Utility"
        description="When you need you need a computer to just pick it, reach for Pickitt!"
        link={
          <Anchor
            href="https://www.pickitt.netlify.com/"
            icon={<LinkNext />}
            label="www.pickitt.netlify.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default Pickitt
