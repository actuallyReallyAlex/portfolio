import React from 'react'
import Intro from '../../../components/Intro'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Intro />', () => {
  test('Should render the <Intro />.', () => {
    const component = shallow(<Intro {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
