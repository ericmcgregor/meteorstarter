import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap';

import {
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const DefaultNav = class DefaultNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen:false,
    };
  }
  toggle(key) {
    this.setState({
      [key]: !this.state[key]
    });
  }
  render() {
    return (
      <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle.bind(this,'isOpen')} />

          <div className="mr-2">
            <ButtonDropdown size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this,'dropdownOpen')}>
              <DropdownToggle caret>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Primary Navigation</DropdownItem>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/defaults/basic">Defaults
                </NavLink>
                <DropdownItem hidden divider />
                  <NavLink
                    className="dropdown-item"
                    activeClassName="active"
                    to="/test">Another Section
                  </NavLink>
              </DropdownMenu>
            </ButtonDropdown>
          </div>

          <NavbarBrand tag={Link} to="/">{this.props.title}</NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Route path={`/defaults`} render={(match)=>{
                return (
                  <Nav className="ml-auto" navbar>
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
                )
              }}/>
          </Collapse>
        </Navbar>
    )
  }

}

DefaultNav.defaultProps = {

}

export default DefaultNav;
