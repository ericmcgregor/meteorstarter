import React from 'react';
import {Meteor} from 'meteor/meteor';
import {
  Col,Container,Row,
  ListGroup, ListGroupItem, ListGroupItemHeading, Badge,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  Popover,PopoverTitle, PopoverContent
} from 'reactstrap';

import {
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Routes from '/imports/startup/routes'

const SideNavBar = class SideNavBar extends React.Component {
  constructor(props){
    super(props)
    this.toggle=this.toggle.bind(this)
    this.state = {
      model:{},
      popoverOpen:'test'
    }
  }
  toggle(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    const props = this.props
    return (
      <Col id="container-sidebar" className={"SideNav"}>

        <Navbar className="sidebar-header" light>
          <Container fluid className="m-0 p-0">
            <Row noGutters>
              <NavbarBrand tag={Link} to="/">Starter Template</NavbarBrand>
              <div hidden className="ml-auto" >
                <i className="fa fa-times text-sm-muted" onClick={this.props.toggle.bind(this, 'SideNavBar')}></i>
              </div>
            </Row>
          </Container>
        </Navbar>

        <GlobalNavWithPopover {...props} />
{
/*
        <Navbar className="full-nav" light>
            <Nav vertical navbar>
              {Routes.map((route, i)=>{
                if(!route.title) return null;
                console.log(route, props.route)
                return (
                  <div key={i}>
                  <NavItem
                    onMouseEnter={this.toggle.bind(this,"popoverOpen",route.path)}>
                    <NavLink
                      id={"Popover"+i}
                      to={route.path}
                      activeClassName="active"
                      className="nav-link">
                      {route.title}
                    </NavLink>

                    {(()=>{
                      if(!route.routes || route.path == props.route.path) return null;
                      return (
                        <Popover
                          placement="right"
                          isOpen={this.state.popoverOpen==route.path}
                          target={"Popover"+i}
                          toggle={this.toggle.bind(this,"popoverOpen",null)}
                          onMouseEnter={this.toggle.bind(this,"popoverOpen",route.path)}
                          onMouseLeave={this.toggle.bind(this,"popoverOpen",null)}
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
*/
}
      </Col>
    )
  }
}

SideNavBar.defaultProps = {
  size:2
}


const GlobalNavWithPopover = class GlobalNavWithPopover extends React.Component {
  constructor(){
    super()
    this.state={
      popoverOpen:'test'
    }
    this.toggle=this.toggle.bind(this)
    this.leave = this.leave.bind(this)
    this.stayOpen = this.stayOpen.bind(this)
    this.enter = this.enter.bind(this)
    this.close = this.close.bind(this)
  }
  toggle(key, val) {
    this.setState({
      [key]: val,
      active: key
    });
  }
  enter(key){
    if(key!==this.state.active) {
      this.close(this.state.active);
    }
    this.toggle(key,true)
  }
  leave(key){
    var id = setTimeout(this.close.bind(this, key), 300);
    this.setState({timeOut:id})
  }
  close(key){
    this.setState({[key]:null, timeOut:null})
  }
  stayOpen(key){
    clearTimeout(this.state.timeOut)
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
                    {route.title}
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
