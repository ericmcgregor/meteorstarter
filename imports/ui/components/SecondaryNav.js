import React from 'react';
import {Meteor} from 'meteor/meteor';

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';

import {
  Route,
  Link,
  NavLink
} from 'react-router-dom'


const SecondaryNav = (props) => (
  <Navbar className="secondary" color="faded" light toggleable>
      <Nav className="" navbar>
        <NavItem>
          <NavLink
            to={'/defaults/basic'}
            activeClassName="active"
            className="nav-link"
            >
            Basic
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to={'/defaults/pivot'}
            activeClassName="active"
            className="nav-link"
            >
            Pivot
          </NavLink>
        </NavItem>
      </Nav>
  </Navbar>
)

export default SecondaryNav;
