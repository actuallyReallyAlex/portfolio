import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import { shallow } from 'enzyme'

const defaultProps = {
  heading: 'Heading',
  subHeading: 'Sub Heading'
}

describe('<SectionHeading />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <SectionHeading /> component.', () => {
    const component = shallow(<SectionHeading {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
