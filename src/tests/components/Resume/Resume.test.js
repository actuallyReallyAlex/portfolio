import React from 'react'
import Resume from '../../../components/Resume'
import { shallow } from 'enzyme'

const defaultProps = {
  navRef: jest.fn(),
  size: 'medium'
}

describe('<Resume />', () => {
  test('Should render the <Resume />.', () => {
    const component = shallow(<Resume {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Resume /> when viewed from a small device.', () => {
    const component = shallow(<Resume {...defaultProps} size="small" />)
    expect(component).toMatchSnapshot()
  })
})
