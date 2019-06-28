import React from 'react'
import InfoList from '../../../components/About/InfoList'
import { shallow } from 'enzyme'

const defaultProps = {
  size: 'medium'
}

describe('<InfoList />', () => {
  test('Should render the <InfoList />.', () => {
    const component = shallow(<InfoList {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
