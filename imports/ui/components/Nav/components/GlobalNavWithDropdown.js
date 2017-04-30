import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Dropdown,
 } from 'reactstrap';
import {
  Link,
  NavLink
} from 'react-router-dom'


const GlobalNavWithDropdown = class GlobalNavWithDropdown extends React.Component {
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
    const props = this.props;
    if(!props.route.routes) return null;
    return (
      <Nav className="ml-4" navbar>
        {props.route.routes.map((route, i)=>{
          if(!route.title) return null;
          if(route.routes) return (
            <NavDropdown key={i} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                {route.title}
              </DropdownToggle>
              <DropdownMenu>
                {route.routes.map((route, i)=>{
                  if(!route.title) return null
                  return (
                    <DropdownItem key={i} tag={Link} to={route.path}>{route.title}</DropdownItem>
                  )
                })}
              </DropdownMenu>
            </NavDropdown>
          )
          return (
            <NavItem key={i}>
              <NavLink
                to={route.path}
                activeClassName="active"
                className="nav-link">
                {route.title}
              </NavLink>
            </NavItem>
          )
        })}
      </Nav>
    )
  }
}

export default GlobalNavWithDropdown;
