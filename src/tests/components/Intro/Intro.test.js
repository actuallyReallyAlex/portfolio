import React from 'react'
import Intro from '../../../components/Intro'
import { shallow } from 'enzyme'

const defaultProps = {
  navRef: jest.fn(),
  size: 'medium'
}

describe('<Intro />', () => {
  test('Should render the <Intro />.', () => {
    const component = shallow(<Intro {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Intro /> when viewed from a small device.', () => {
    const component = shallow(<Intro {...defaultProps} size="small" />)
    expect(component).toMatchSnapshot()
  })
})
