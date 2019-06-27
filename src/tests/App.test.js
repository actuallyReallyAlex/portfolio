import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<App />', () => {
  test('Should render the <App />.', () => {
    const component = shallow(<App {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
