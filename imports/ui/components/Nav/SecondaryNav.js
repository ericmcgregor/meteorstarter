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


const SecondaryNav = (props) => {
  if(!props.routes) return null;
  return(
    <Navbar className="secondary" color="faded" light toggleable>
        <Nav className="" navbar>

          {props.routes.map((route, i)=>(
            <NavItem key={i}>
              <NavLink
                to={route.path}
                activeClassName="active"
                className="nav-link"
                >
                {route.title}
              </NavLink>
            </NavItem>
          ))}

        </Nav>
    </Navbar>
  )
}

export default SecondaryNav;
