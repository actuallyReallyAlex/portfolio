import React from 'react'
import About from '../../../components/About'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<About />', () => {
  test('Should render the <About />.', () => {
    const component = shallow(<About {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
