import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  ListGroup, ListGroupItem, Badge,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const SideNavBar = class SideNavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      model:{}
    }
  }
  render() {
    return (
      <div>

        <Navbar color="faded" light toggleable>
            <NavbarToggler right />
            <NavbarBrand tag={Link} to="/">Starter Template</NavbarBrand>
        </Navbar>

        <ListGroup>
          <ListGroupItem
            action
            tag={NavLink}
            to={'/basic'}
            activeClassName="active"
            className="justify-content-between">
            Basic Table
          </ListGroupItem>
          <ListGroupItem
            action
            tag={NavLink}
            to={'/pivot'}
            activeClassName="active"
            className="justify-content-between">
            Pivot Table <Badge pill>2</Badge>
          </ListGroupItem>
          <ListGroupItem
            action
            tag="a"
            href="#"
            className="justify-content-between">
            Morbi leo risus <Badge pill>1</Badge>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

SideNavBar.defaultProps = {

}

export default SideNavBar;
