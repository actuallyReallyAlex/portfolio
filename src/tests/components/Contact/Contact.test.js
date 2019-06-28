import React from 'react'
import Contact from '../../../components/Contact'
import { shallow } from 'enzyme'

const defaultProps = {
  navRef: jest.fn(),
  size: 'medium'
}

describe('<Contact />', () => {
  test('Should render the <Contact />.', () => {
    const component = shallow(<Contact {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
