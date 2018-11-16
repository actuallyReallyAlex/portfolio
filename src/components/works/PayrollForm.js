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
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177964/portfolio/payroll-form.png"
            alt="Screeshot of Payroll Form Tool."
            className="lazyload"
          />
        }
        heading="Payroll Form"
        label="Form"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A form integrated with a dashboard to collect and process employee payroll information."
            sourceLink="https://github.com/alexlee-dev/Payroll/"
          />
        }
        link={
          <Anchor
            href="https://demo-payroll-admin.netlify.com/"
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

export default PayrollForm
