import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/payroll-admin.png'

const PayrollAdmin = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="Payroll Admin"
        label="Dashboard"
        description="A comprehensive dashboard to view payroll information."
        link={
          <Anchor
            href="https://www.google.com/"
            icon={<LinkNext />}
            label="www.DUMMYSITE.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default PayrollAdmin
