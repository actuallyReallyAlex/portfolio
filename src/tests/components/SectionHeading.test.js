import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import { shallow } from 'enzyme'

const defaultProps = {
  heading: 'Heading',
  size: 'medium',
  subHeading: 'Sub Heading'
}

describe('<SectionHeading />', () => {
  test('Should render the <SectionHeading /> component.', () => {
    const component = shallow(<SectionHeading {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
