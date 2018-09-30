import React from 'react'
import { Section, Tiles } from 'grommet'
import SectionHeader from '../components/SectionHeader'

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
      <Tiles flush={false} fill>
        <Reposier />
        <Splague />
        <PayrollAdmin />
        <PayrollForm />
        <Remembera />
        <Pickitt />
        <StaffingDashboard />
        <Contractor />
        <StaffWebsite />
        <FacilitatorWebsite />
        <PortfolioWork />
        <PortfolioDocs />
      </Tiles>
    </Section>
  )
}

export default Portfolio
