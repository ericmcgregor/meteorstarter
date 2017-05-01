import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Col,Container,Row,
  ListGroup, ListGroupItem, ListGroupItemHeading, Badge,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  Popover,PopoverTitle, PopoverContent,CardBlock
} from 'reactstrap';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Routes from '/imports/startup/routes'
import NavHoverController from "./components/NavHoverController";
import UserNavWithDropdown from './components/UserNavWithDropdown';

const SideNavBar = class SideNavBar extends React.Component {
  constructor(props){
    super(props)
    this.toggle=this.toggle.bind(this)
    this.state = {
      SideNavBar:true
    }
  }
  toggle(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    const props = this.props
    let styles={}
    if(this.state.SideNavBar == false) {
        styles={
          width:"40px"
        }
    }
    return (
      <Col xs={2} className={"Panel SideNav"} style={styles}>
        {(()=>{
          if(this.state.SideNavBar) return (
            <div>

            <Navbar className="sidebar-header p-0" light>
                <Row noGutters>
                  <Col xs={"auto"} className="pb-0 p-2">
                    <NavbarBrand tag={Link} to="/" className="m-0">Starter Template</NavbarBrand>
                  </Col>
                  <div onClick={this.toggle.bind(this, 'SideNavBar', !this.state.SideNavBar)}
                    className="pointer px-3 ml-auto d-flex align-items-center">
                    <i className="fa fa-caret-left text-sm-muted"></i>
                  </div>
                </Row>
            </Navbar>

            <Navbar className="full-nav" light>
              <Nav vertical navbar>
                <div>
                  <UserNavWithDropdown {...props} right={false}/>
                </div>
              </Nav>
            </Navbar>

            <GlobalNavWithPopover {...props} />

          </div>
          )
          else return (
            <CardBlock onClick={this.toggle.bind(this, 'SideNavBar')} className="pointer px-0 d-flex align-items-center justify-content-center">
              <i className=" fa fa-caret-right text-sm-muted"></i>
            </CardBlock>
          )
        })()}

      </Col>
    )
  }
}
SideNavBar.defaultProps = {
  size:2
}


const GlobalNavWithPopover = class GlobalNavWithPopover extends NavHoverController {
  constructor(){
    super()
  }
  render() {
    const props = this.props;
    return (
      <Navbar className="full-nav" light>
          <Nav vertical navbar>
            {Routes.map((route, i)=>{
              if(!route.title) return null;
              return (
                <div key={i}>
                <NavItem
                  onMouseEnter={this.enter.bind(this, route.path)}
                  onMouseLeave={this.leave.bind(this, route.path)}>
                  <NavLink
                    id={"Popover"+i}
                    to={route.path}
                    activeClassName="active"
                    className="nav-link">
                    <Row className="m-0" noGutters={true}>
                      <Col className="pb-0">
                        {route.title}
                      </Col>
                      <div hidden style={{opacity:"0.4"}}><i className="fa fa-th-list"></i></div>
                    </Row>

                  </NavLink>

                  {(()=>{
                    if(!route.routes || route.path == props.route.path) return null;
                    return (
                      <Popover
                        placement="right"
                        isOpen={this.state[route.path]==true}
                        target={"Popover"+i}
                        toggle={this.toggle.bind(this,route.path,!this.state[route.path])}
                        onMouseEnter={this.stayOpen.bind(this,route.path)}
                        onMouseLeave={this.leave.bind(this, route.path)}
                        >
                       <PopoverContent className="" style={{width:"180px"}}>
                         <ListGroup hidden>
                            {route.routes.map((route, i)=>{
                              if(!route.title) return null;
                              return (
                                <ListGroupItem key={i}>{route.title}</ListGroupItem>
                              )
                            })}
                        </ListGroup>


                         <Nav vertical navbar>
                         {route.routes.map((route, i)=>{
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
                       </PopoverContent>
                     </Popover>
                    )
                  })()}

                </NavItem>

                <Route path={route.path} render={match=>{
                    if(!route.routes) return null;
                    return (
                      <Navbar light>
                      <Nav vertical navbar>
                        {route.routes.map((route, i)=>{
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
                      </Navbar>
                    )
                }} />

                </div>
              )
            })}
          </Nav>
      </Navbar>

    )
  }
}



export default SideNavBar;
