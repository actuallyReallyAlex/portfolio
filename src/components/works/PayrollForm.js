import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PayrollForm = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/payroll-form.png'
        }
        heading="Payroll Form"
        label="Form"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A form integrated with a dashboard to collect and process employee payroll information."
          />
        }
        link={
          <Anchor
            href="https://demo-payroll-admin.netlify.com/"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default PayrollForm
