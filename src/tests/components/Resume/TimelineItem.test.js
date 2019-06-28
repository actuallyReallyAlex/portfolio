import React from 'react'
import TimelineItem from '../../../components/Resume/TimelineItem'
import { shallow } from 'enzyme'

const defaultProps = {
  icon: 'Code',
  organization: 'Organization',
  summary: 'Summary',
  title: 'Title',
  startDate: 'December 1999',
  endDate: 'January 2000',
  size: 'medium'
}

describe('<PortfoliTimelineItemoItem />', () => {
  test('Should render the <TimelineItem />.', () => {
    const component = shallow(<TimelineItem {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <TimelineItem /> with present prop.', () => {
    const component = shallow(<TimelineItem {...defaultProps} present={true} />)
    expect(component).toMatchSnapshot()
  })
})
