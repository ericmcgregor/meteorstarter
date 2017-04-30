import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,UncontrolledNavDropdown,
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
import NavHoverController from "./components/NavHoverController";
import GlobalNavIconWithPopover from './components/GlobalNavIconWithPopover';
import GlobalNavWithDropdown from './components/GlobalNavWithDropdown';
import UserNavWithDropdown from './components/UserNavWithDropdown';

const DropdownNav = class DropdownNav extends React.Component {
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

        <NavbarBrand tag={"div"}>
          <GlobalNavIconWithPopover style="grid" {...props} />
        </NavbarBrand>

        <NavbarBrand  tag={"div"}>
          {props.route.title}
        </NavbarBrand>

        <GlobalNavWithDropdown {...props} />

            <Nav className="ml-auto" navbar>
              <UserNavWithDropdown {...props} />

            </Nav>

        </Navbar>


      </header>
    )
  }

}

DropdownNav.defaultProps = {

}

export default DropdownNav;





//
// const ProductNavWithPopover = class ProductNavWithPopover extends NavHoverController {
//   constructor(){
//     super()
//   }
//   render() {
//     const props = this.props;
//     const route = props.route;
//     console.log(route)
//     return (
//       <NavbarBrand tag={"div"}>
//           <div id="Popover" className="dropdown-toggle"
//             onMouseEnter={this.enter.bind(this, route.path)}
//             onMouseLeave={this.leave.bind(this, route.path)}>
//             {props.route.title}
//           </div>
//
//
//
//           <Popover
//             placement={props.placement}
//             isOpen={this.state[route.path]==true}
//             target={"Popover"}
//             toggle={this.toggle.bind(this,route.path,!this.state[route.path])}
//             onMouseEnter={this.stayOpen.bind(this,route.path)}
//             onMouseLeave={this.leave.bind(this, route.path)}
//             >
//             <PopoverContent className="" style={{width:props.width}}>
//               <Nav vertical navbar>
//
//                 {Routes.map((route, i)=>{
//                   if(!route.title) return null;
//                   return (
//                     <NavItem key={i}>
//                       <NavLink
//                         to={route.path}
//                         activeClassName="active"
//                         className="nav-link"
//                         >
//                         {route.title}
//                       </NavLink>
//                     </NavItem>
//                   )
//                 })}
//               </Nav>
//             </PopoverContent>
//           </Popover>
//
//       </NavbarBrand>
//
//     )
//   }
// }
// ProductNavWithPopover.defaultProps = {
//   width:"180px",
//   placement:"bottom left",
//   title:"Default title"
// }


//
// <NavbarToggler right onClick={this.toggle.bind(this,'isOpen')} />
//
// <div hidden className="mr-2">
//   <ButtonDropdown size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this,'dropdownOpen')}>
//     <DropdownToggle caret>
//     </DropdownToggle>
//     <DropdownMenu>
//       <DropdownItem header>Primary Navigation</DropdownItem>
//       {Routes.map((route, i)=>(
//         <NavLink
//           key={i}
//           className="dropdown-item"
//           activeClassName="active"
//           to={route.path}>{route.title}
//         </NavLink>
//       ))}
//     </DropdownMenu>
//   </ButtonDropdown>
// </div>

// <NavbarBrand hidden tag={"div"}>
//         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//           <DropdownToggle tag={"div"} caret>
//             {props.route.title}
//           </DropdownToggle>
//           <DropdownMenu>
//             {Routes.map((route, i)=>{
//               if(!route.title) return null;
//               return (
//                 <DropdownItem key={i} tag={Link} to={route.path}>{route.title}</DropdownItem>
//               )
//             })}
//           </DropdownMenu>
//         </Dropdown>
// </NavbarBrand>
//




        // {props.route.routes.map((route, i)=>{
        //   if(!route.routes) return null;
        //   return (
        //     <Route key={i} path={route.path} render={match => (
        //         <SecondaryNav routes={route.routes} />
        //       )} />
        //   )
        // })}
