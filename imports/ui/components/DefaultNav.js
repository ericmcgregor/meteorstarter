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
import SecondaryNav from '/imports/ui/components/SecondaryNav'
import Routes from '/imports/startup/routes'

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
    const props = this.props;
    return (
      <header>

      <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle.bind(this,'isOpen')} />

          <div className="mr-2">
            <ButtonDropdown size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this,'dropdownOpen')}>
              <DropdownToggle caret>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Primary Navigation</DropdownItem>
                {Routes.map((route, i)=>(
                  <NavLink
                    key={i}
                    className="dropdown-item"
                    activeClassName="active"
                    to={route.path}>{route.title}
                  </NavLink>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </div>

          <NavbarBrand tag={Link} to={props.route.match.url}>{props.route.title}</NavbarBrand>

          {(()=>{
            if(!this.props.route.routes) return null;
            return (
              <Collapse isOpen={this.state.isOpen} navbar className="p-0">
                  <Nav className="ml-4" navbar>
                    {this.props.route.routes.map((route, i)=>{
                      if(!route.title) return null;
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
              </Collapse>
            )
          })()}

        </Navbar>

        {(()=>{
          if(!this.props.route.routes) return null;
          return props.route.routes.map((route, i)=>{
            if(!route.routes) return null;
            return (
              <Route key={i} path={route.path} render={match => (
                  <SecondaryNav routes={route.routes} />
                )} />
            )
          })
        })()}


      </header>
    )
  }

}

DefaultNav.defaultProps = {

}

export default DefaultNav;
