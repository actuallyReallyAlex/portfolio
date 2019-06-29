import React from 'react'
import Footer from '../../components/Footer'
import { shallow } from 'enzyme'

const defaultProps = {
  size: 'medium'
}

describe('<Footer />', () => {
  test('Should render the <Footer /> component.', () => {
    const component = shallow(<Footer {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
