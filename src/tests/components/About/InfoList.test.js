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

  test('Should render the <InfoList /> when viewed from a small device.', () => {
    const component = shallow(<InfoList {...defaultProps} size="small" />)
    expect(component).toMatchSnapshot()
  })
})
