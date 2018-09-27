import React from 'react'
import ReactDOM from 'react-dom'
import Site from '../Site'
import LanguagesLegend from '../components/LanguagesLegend'
import LoremIpsum from '../components/LoremIpsum'
import NavMenu from '../components/NavMenu'
import Profile from '../components/Profile'
import ProfileStats from '../components/ProfileStats'
import SectionHeader from '../components/SectionHeader'
import Skills from '../components/Skills'
import TimelineContent from '../components/TimelineContent'
import TimelineHeading from '../components/TimelineHeading'
import TimelineIcon from '../components/TimelineIcon'
import TimelineItem from '../components/TimelineItem'
import Experience from '../components/Experience'
import Portfolio from '../sections/Portfolio'
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
import Contact from '../sections/Contact'
import ContactForm from '../components/ContactForm'

it('Site component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Site />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('LanguagesLegend component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <LanguagesLegend languages={['HTML', 'CSS', 'JavaScript']} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('LoremIpsum component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoremIpsum />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('NavMenu component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavMenu />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Profile component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Profile />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('ProfileStats component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProfileStats />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('SectionHeader component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SectionHeader title="Title" subtitle="Subtitle" />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Skills component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Skills />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('TimelineContent component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <TimelineContent subtitle="Test Subtitle" summary="Test Summary" />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('TimelineHeading component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <TimelineHeading startDate="Test StartDate" title="Test Title" />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('TimelineIcon component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TimelineIcon />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('TimelineItem component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <TimelineItem
      startDate="Test StartDate"
      title="Test Title"
      subtitle="Test Subtitle"
      summary="Test Summary"
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('Experience component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Experience />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Portfolio component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Portfolio />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Reposier component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Reposier />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Splague component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Splague />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('PayrollAdmin component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PayrollAdmin />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('PayrollForm component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PayrollForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('StaffingDashboard component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StaffingDashboard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Contractor component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Contractor />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('StaffWebsite component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StaffWebsite />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('FacilitatorWebsite component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FacilitatorWebsite />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Remembera component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Remembera />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Pickitt component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Pickitt />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Contact component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Contact />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('ContactForm component renders without crashing.', () => {
  const div = document.createElement('div')
  const sendEmail = () => {
    console.log('sendEmail func')
  }
  const showToast = () => {
    console.log('showToast func')
  }
  ReactDOM.render(
    <ContactForm sendEmail={sendEmail} showToast={showToast} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
