import React from 'react'
import SocialIcon from '../../components/SocialIcon'
import { shallow } from 'enzyme'

const defaultProps = {
  icon: 'Code',
  link: 'www.google.com',
  size: 'medium'
}

describe('<SocialIcon />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <SocialIcon /> component.', () => {
    const component = shallow(<SocialIcon {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
