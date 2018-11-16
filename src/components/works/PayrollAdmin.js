import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const PayrollAdmin = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177963/portfolio/payroll-admin.png"
            alt="Screeshot of Payroll Admin Tool."
            className="lazyload"
          />
        }
        heading="Payroll Admin"
        label="Dashboard"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A comprehensive dashboard to view payroll information. Used by companies to manage previous, current, and future reports. Ability to export data in a variety of formats."
            sourceLink="https://github.com/alexlee-dev/Payroll/tree/master/admin"
          />
        }
        link={
          <Anchor
            href="https://demo-payroll-admin.netlify.com/admin/"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
            rel="noreferrer"
          />
        }
      />
    </Tile>
  )
}

export default PayrollAdmin
