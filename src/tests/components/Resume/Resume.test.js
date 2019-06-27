import React from 'react'
import Resume from '../../../components/Resume'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Resume />', () => {
  test('Should render the <Resume />.', () => {
    const component = shallow(<Resume {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
