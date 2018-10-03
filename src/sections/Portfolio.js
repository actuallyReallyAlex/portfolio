import React from 'react'
import { Section, Tiles, Tile } from 'grommet'
import { BrowserView, MobileView } from 'react-device-detect'
import SectionHeader from '../components/SectionHeader'
import Tilty from '../components/Tilty'

// Works
import Reposier from '../components/works/Reposier'
import Splague from '../components/works/Splague'
import PayrollAdmin from '../components/works/PayrollAdmin'
import PayrollForm from '../components/works/PayrollForm'
import StaffingDashboard from '../components/works/StaffingDashboard'
import Contractor from '../components/works/Contractor'
import StaffWebsite from '../components/works/StaffWebsite'
import FacilitatorWebsite from '../components/works/FacilitatorWebsite'
import Remembera from '../components/works/Remembera'
import Pickitt from '../components/works/Pickitt'
import PortfolioWork from '../components/works/PortfolioWork'
import PortfolioDocs from '../components/works/PortfolioDocs'

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <SectionHeader
        title="Portfolio"
        subtitle="Check out some of my projects."
      />
      <BrowserView>
        <Tiles flush={false} fill>
          <Tilty portfolioItem item={<Reposier />} />
          <Tilty portfolioItem item={<Splague />} />
          <Tilty portfolioItem item={<PayrollAdmin />} />
          <Tilty portfolioItem item={<PayrollForm />} />
          <Tilty portfolioItem item={<Remembera />} />
          <Tilty portfolioItem item={<Pickitt />} />
          <Tilty portfolioItem item={<StaffingDashboard />} />
          <Tilty portfolioItem item={<Contractor />} />
          <Tilty portfolioItem item={<StaffWebsite />} />
          <Tilty portfolioItem item={<FacilitatorWebsite />} />
          <Tilty portfolioItem item={<PortfolioWork />} />
          <Tilty portfolioItem item={<PortfolioDocs />} />
        </Tiles>
      </BrowserView>
      <MobileView>
        <Tile>
          <Reposier />
        </Tile>
        <Tile>
          <Splague />
        </Tile>
        <Tile>
          <PayrollAdmin />
        </Tile>
        <Tile>
          <PayrollForm />
        </Tile>
        <Tile>
          <Remembera />
        </Tile>
        <Tile>
          <Pickitt />
        </Tile>
        <Tile>
          <StaffingDashboard />
        </Tile>
        <Tile>
          <Contractor />
        </Tile>
        <Tile>
          <StaffWebsite />
        </Tile>
        <Tile>
          <FacilitatorWebsite />
        </Tile>
        <Tile>
          <PortfolioWork />
        </Tile>
        <Tile>
          <PortfolioDocs />
        </Tile>
      </MobileView>
    </Section>
  )
}

export default Portfolio
