import React from 'react'
import TimelineItem from '../../../components/Resume/TimelineItem'
import { shallow } from 'enzyme'

const defaultProps = {
  icon: 'Code',
  organization: 'Organization',
  summary: 'Summary',
  title: 'Title'
}

describe('<PortfoliTimelineItemoItem />', () => {
  test('Should render the <TimelineItem />.', () => {
    const component = shallow(<TimelineItem {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
