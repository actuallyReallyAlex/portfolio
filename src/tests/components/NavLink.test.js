import React from 'react'
import NavLink from '../../components/NavLink'
import { shallow } from 'enzyme'

const defaultProps = {
  active: false,
  title: 'Title'
}

describe('<NavLink />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <NavLink /> component when active.', () => {
    const component = shallow(<NavLink {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <NavLink /> component when not active.', () => {
    const component = shallow(<NavLink {...defaultProps} active={false} />)
    expect(component).toMatchSnapshot()
  })

  test('Should smoothly scroll to element on link click.', () => {
    const component = shallow(<NavLink {...defaultProps} />)
    component.simulate('click')
  })
})
