import React from 'react'
import Nav from '../../components/Nav'
import { shallow } from 'enzyme'

const defaultProps = {
  navigationSections: ['Home', 'About', 'Résumé', 'Portfolio'],
  size: 'medium',
  views: [
    { title: 'Home', isInView: true },
    { title: 'About', isInView: false },
    { title: 'Résumé', isInView: false },
    { title: 'Portfolio', isInView: false }
  ]
}

describe('<Nav />', () => {
  test('Should render the <Nav /> component.', () => {
    const component = shallow(<Nav {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Nav /> component when viewed from a small device.', () => {
    const component = shallow(<Nav {...defaultProps} size="small" />)
    expect(component).toMatchSnapshot()
  })
})
