import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import screenshot from '../../assets/screenshots/payroll-form.png'

const PayrollForm = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={screenshot}
        heading="Payroll Form"
        label="Form"
        description="A form integrated with a dashboard to collect and process employee payroll information."
        link={
          <Anchor
            href="https://www.google.com/"
            icon={<LinkNext />}
            label="www.DUMMYSTIE.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default PayrollForm
