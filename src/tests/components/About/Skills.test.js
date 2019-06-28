import React from 'react'
import Skills from '../../../components/About/Skills'
import { shallow } from 'enzyme'

const defaultProps = {
  size: 'medium'
}

describe('<Skills />', () => {
  test('Should render the <Skills />.', () => {
    const component = shallow(<Skills {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
