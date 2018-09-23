import React from "react";
import { Menu } from 'semantic-ui-react'
import capitalize from 'lodash.capitalize'

const NavMenuItem = props => {
  return (
    <Menu.Item
      name={props.name}
      active={props.activeItem === props.name}
      onClick={props.handleClick}
    >
      {capitalize(props.name)}
    </Menu.Item>
  );
};

export default NavMenuItem;
