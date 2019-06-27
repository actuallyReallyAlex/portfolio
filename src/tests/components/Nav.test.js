import React from 'react'
import Nav from '../../components/Nav'
import { shallow } from 'enzyme'

const defaultProps = {
  navigationSections: ['Home', 'About', 'Résumé', 'Portfolio'],
  views: [
    { title: 'Home', isInView: true },
    { title: 'About', isInView: false },
    { title: 'Résumé', isInView: false },
    { title: 'Portfolio', isInView: false }
  ]
}

describe('<Nav />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Nav /> component.', () => {
    const component = shallow(<Nav {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
