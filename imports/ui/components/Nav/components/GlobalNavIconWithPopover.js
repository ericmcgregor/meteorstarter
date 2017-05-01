import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavDropdown,
  Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,Dropdown,
  Popover, PopoverContent, Row, Col
 } from 'reactstrap';

import {
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import SecondaryNav from '/imports/ui/components/Nav/SecondaryNav'
import Routes from '/imports/startup/routes'
import NavHoverController from "./NavHoverController";

const GlobalNavIconWithPopover = class GlobalNavIconWithPopover extends NavHoverController {
  constructor(){
    super()
  }
  render() {
    const props = this.props;
    const route = props.route;
    console.log(route)
    return (
      <div>
          <div id="Popover"
            onMouseEnter={this.enter.bind(this, route.path)}
            onMouseLeave={this.leave.bind(this, route.path)}>
            <i className="fa fa-align-justify"></i>
          </div>

          <Popover
            placement={props.placement}
            isOpen={this.state[route.path]==true}
            target={"Popover"}
            toggle={this.toggle.bind(this,route.path,!this.state[route.path])}
            onMouseEnter={this.stayOpen.bind(this,route.path)}
            onMouseLeave={this.leave.bind(this, route.path)}
            style={{maxWidth:props.width}}
            >
            <PopoverContent className="" style={{width:props.width}}>
              {(()=>{
                switch (props.style) {
                  case "grid":
                    return <NavListGrid {...props} />
                    break;
                  case "list":
                    return <NavListList {...props} />
                    break;
                  default:

                }
              })()}
            </PopoverContent>
          </Popover>

      </div>

    )
  }
}
GlobalNavIconWithPopover.defaultProps = {
  style:"list",
  width:"420px",
  placement:"bottom left",
  title:"Default title"
}
const NavListGrid = (props) => (
  <Row noGutters>
    {props.appRoutes.map((route, i)=>{
      if(!route.title) return null;
      return (
        <Col xs={4} className="py-1 text-center" key={i}>
          <NavLink
            to={route.path}
            activeClassName="active"
            className="nav-link"
            >
            <div className="nav-icon rounded-circle mb-2"></div>
            {route.title}
          </NavLink>
        </Col>
      )
    })}
  </Row>
)
const NavListList = (props) => (
  <Nav vertical navbar>
    {props.appRoutes.map((route, i)=>{
      if(!route.title) return null;
      return (
        <NavItem key={i}>
          <NavLink
            to={route.path}
            activeClassName="active"
            className="nav-link"
            >
            {route.title}
          </NavLink>
        </NavItem>
      )
    })}
  </Nav>
)

export default GlobalNavIconWithPopover;
