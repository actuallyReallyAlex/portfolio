import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/staffing-dashboard.png'

const StaffingDashboard = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="Staffing Dashboard"
        label="Dashboard"
        description="A fully functional dashboard to help with staffing and recruiting."
        link={
          <Anchor
            href="https://alexlee-dev.github.io/Staffing/index.html"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default StaffingDashboard
