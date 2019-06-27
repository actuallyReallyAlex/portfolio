import React from 'react'
import NavLink from '../../components/NavLink'
import { shallow } from 'enzyme'

const defaultProps = {
  title: 'Title'
}

describe('<NavLink />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <NavLink /> component.', () => {
    const component = shallow(<NavLink {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should smoothly scroll to element on link click.', () => {
    const component = shallow(<NavLink {...defaultProps} />)
    component.simulate('click')
  })
})
