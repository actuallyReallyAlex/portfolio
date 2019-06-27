import React from 'react'
import App from '../../App'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<App />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <App /> component.', () => {
    const component = shallow(<App {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
