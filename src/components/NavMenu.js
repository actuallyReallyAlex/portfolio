import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Menu } from 'semantic-ui-react'
import NavMenuItem from './NavMenuItem'

class NavMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted id="segment">
        <Menu inverted pointing secondary className={this.props.className}>
          <NavMenuItem
            name="home"
            handleClick={this.handleItemClick}
            activeItem={activeItem}
          />
          <NavMenuItem
            name="about"
            handleClick={this.handleItemClick}
            activeItem={activeItem}
          />
          <NavMenuItem
            name="resume"
            handleClick={this.handleItemClick}
            activeItem={activeItem}
          />
          <NavMenuItem
            name="portfolio"
            handleClick={this.handleItemClick}
            activeItem={activeItem}
          />
          <NavMenuItem
            name="services"
            handleClick={this.handleItemClick}
            activeItem={activeItem}
          />
          <NavMenuItem
            name="contact"
            handleClick={this.handleItemClick}
            activeItem={activeItem}
          />
        </Menu>
      </Segment>
    )
  }
}

NavMenu.propTypes = {
  className: PropTypes.string
}

export default NavMenu
