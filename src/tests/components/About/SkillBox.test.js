import React from 'react'
import SkillBox from '../../../components/About/SkillBox'
import { shallow } from 'enzyme'

const defaultProps = {
  color: 'accent-1',
  title: 'JavaScript'
}

describe('<SkillBox />', () => {
  test('Should render the <SkillBox />.', () => {
    const component = shallow(<SkillBox {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
