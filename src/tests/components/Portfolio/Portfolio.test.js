import React from 'react'
import Portfolio from '../../../components/Portfolio'
import { shallow } from 'enzyme'

const defaultProps = {
  navRef: jest.fn(),
  size: 'medium'
}

describe('<Portfolio />', () => {
  test('Should render the <Portfolio />.', () => {
    const component = shallow(<Portfolio {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
