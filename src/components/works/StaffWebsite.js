import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/staff-website.png'

const StaffWebsite = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="SuperCamp Staff Page"
        label="Website"
        description="A staff website for SuperCamp."
        link={
          <Anchor
            href="http://www.supercamp.com/staff/"
            icon={<LinkNext />}
            label="www.supercamp.com/staff"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default StaffWebsite
