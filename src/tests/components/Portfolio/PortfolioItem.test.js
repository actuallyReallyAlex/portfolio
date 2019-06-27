import React from 'react'
import PortfolioItem from '../../../components/Portfolio/PortfolioItem'
import { shallow } from 'enzyme'

const defaultProps = {
  category: 'Category',
  description: 'Description',
  image: 'fakeURL',
  languages: [{ color: 'accent-1', title: 'JavaScript' }],
  title: 'Title',
  source: {
    title: 'Source',
    href: 'fakeURL'
  },
  link: {
    title: 'Demo',
    href: 'fakeURL'
  }
}

describe('<PortfolioItem />', () => {
  test('Should render the <PortfolioItem />.', () => {
    const component = shallow(<PortfolioItem {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
