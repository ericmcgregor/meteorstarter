import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Col,
  ListGroup, ListGroupItem, Badge,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
} from 'reactstrap';

import {
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
      <Col id="container-sidebar" className={"SideNav"}>

        <Navbar light toggleable>
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
            tag={NavLink}
            to={'/test'}
            className="justify-content-between">
            Morbi leo risus <Badge pill>1</Badge>
          </ListGroupItem>
        </ListGroup>
      </Col>
    )
  }
}

SideNavBar.defaultProps = {
  size:2
}

export default SideNavBar;
