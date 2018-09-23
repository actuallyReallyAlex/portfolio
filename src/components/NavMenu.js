import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import NavMenuItem from "./NavMenuItem";

class NavMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
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
    );
  }
}

export default NavMenu;
