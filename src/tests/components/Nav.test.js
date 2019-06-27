import React from 'react'
import Nav from '../../components/Nav'
import { shallow } from 'enzyme'

const defaultProps = {
  navigationSections: ['Home', 'About', 'Résumé', 'Portfolio']
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
