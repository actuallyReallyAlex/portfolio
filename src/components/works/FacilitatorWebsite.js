import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/facilitator-website.png'

const FacilitatorWebsite = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="SuperCamp Facilitator Page"
        label="Website"
        description="A staff showcase for SuperCamp."
        link={
          <Anchor
            href="http://www.supercamp.com/our-staff/"
            icon={<LinkNext />}
            label="www.supercamp.com/our-staff"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default FacilitatorWebsite
