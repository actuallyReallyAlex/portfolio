import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from '../Portfolio'
import LanguagesLegend from '../components/LanguagesLegend'
import LoremIpsum from '../components/LoremIpsum'
import NavMenu from '../components/NavMenu'
import Profile from '../components/Profile'
import ProfileStats from '../components/ProfileStats'
import SectionHeader from '../components/SectionHeader'
import Skills from '../components/Skills'

it('Portfolio component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Portfolio />, div)
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
