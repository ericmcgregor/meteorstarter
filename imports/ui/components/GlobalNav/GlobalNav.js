import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavLink, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const GlobalNav = props => (
  <Navbar color="faded" light toggleable>
    <NavbarToggler right onClick={this.toggle} />
    <NavbarBrand href="/">Title</NavbarBrand>
    <Nav className="ml-auto" navbar hidden>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/fullpage">Full Page</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/sidebar">Sidebar</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/api">API</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

GlobalNav.defaultProps = {};

GlobalNav.propTypes = {};

export default GlobalNav;