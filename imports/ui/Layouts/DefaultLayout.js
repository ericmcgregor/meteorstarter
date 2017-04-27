import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import DefaultFormComponent from '/imports/ui/defaultComponents/DefaultFormComponent'
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import PivotTableComponent from '/imports/ui/defaultComponents/PivotTable/PivotTableComponent'
import DefaultTableActions from '/imports/ui/defaultComponents/DefaultTableActions'
import {
  Container, Row, Col, CardBlock, Card, CardHeader, Button,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import { DefaultPageConstructor } from '/imports/ui/Containers/DefaultContainer'
import SideNavBar from '/imports/ui/components/SideNavBar';
import DefaultNav from '/imports/ui/components/DefaultNav'
import DropdownNav from '/imports/ui/components/DropdownNav'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const DefaultLayoutComponent = class DefaultLayoutComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      SideNavBar:false,
      OffCanvas:false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(key) {
    if(!this.state[key]) {
      return this.setState({
        [key]:true
      })
    }
    this.setState({
      [key]: !this.state[key]
    });
  }
  flattenRoutes(routes) {
    let _routes = [];
    if(!routes) return _routes;
    routes.forEach((route, i)=>{
      _routes.push(route)
      if(route.routes){
        _routes.push(...route.routes)
      }
    })
    return _routes;
  }
  render() {
    const props = this.props;
    if(props.loading) return null;
    console.log(props)
    return (
      <Container id="container-body" fluid={true}>

        {(()=>{
          if(this.props.route.nav) {
            return <this.props.route.nav  route={props.route} />
          } else {
            return <DropdownNav route={props.route} />
          }
        })()}


        <main>
          <Row noGutters={true}>

            {this.state.SideNavBar ? <SideNavBar size={2} toggle={this.toggle} open={this.state.SideNavBar} {...props} /> : null}

            <Col id="container-content">
              <CardBlock>

                <Switch>
                  {
                    this.flattenRoutes(props.route.routes).map((route, i)=>(
                      <Route key={i} path={route.path} exact={route.exact} render={match=>(
                        <div>
                          <route.component {...props} />
                        </div>
                        )}>
                      </Route>
                    ))
                  }
                </Switch>

                <Button onClick={this.toggle.bind(this,'SideNavBar')}>SideNavBar</Button>
                <Button onClick={this.toggle.bind(this,'OffCanvas')}>Offcanvas</Button>

              </CardBlock>
            </Col>

            {this.state.OffCanvas ? <Col xs={3} className="offCanvas">offcanvas</Col> : null}


          </Row>
        </main>
      </Container>
    )
  }
}


export default DefaultLayout = createContainer (DefaultPageConstructor, DefaultLayoutComponent)
