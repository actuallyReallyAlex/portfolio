import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PayrollAdmin = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177963/portfolio/payroll-admin.png'
        }
        heading="Payroll Admin"
        label="Dashboard"
        description={
          <PortfolioItemDescription
            languages={['HTML', 'CSS', 'JavaScript']}
            description="A comprehensive dashboard to view payroll information."
          />
        }
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
