import React from 'react'
import { Section, Tiles } from 'grommet'
import { BrowserView, MobileView } from 'react-device-detect'
import SectionHeader from '../components/SectionHeader'
import Tilty from '../components/Tilty'
import LazyLoad from 'react-lazyload'

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
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <Reposier />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <Splague />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <PayrollAdmin />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <PayrollForm />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <Remembera />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <Pickitt />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <StaffingDashboard />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <Contractor />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <StaffWebsite />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <FacilitatorWebsite />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <PortfolioWork />
              </LazyLoad>
            }
          />
          <Tilty
            portfolioItem
            item={
              <LazyLoad height={694}>
                <PortfolioDocs />
              </LazyLoad>
            }
          />
        </Tiles>
      </BrowserView>
      <MobileView>
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
      </MobileView>
    </Section>
  )
}

export default Portfolio
