import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { DefaultPageConstructor } from '/imports/ui/Containers/DefaultContainer'
import {
  Container, Row, Col, CardBlock, Card, CardHeader, Button,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SideNavBar from '/imports/ui/components/Nav/SideNavBar';
import OffCanvas from '/imports/ui/components/OffCanvas';
import LayoutController from '/imports/ui/Layouts/LayoutController'
import DefaultFormComponent from '/imports/ui/defaultComponents/DefaultFormComponent'


const SidebarLayoutComponent = class SidebarLayoutComponent extends LayoutController {
  constructor(props){
    super(props)
    this.state={
      OffCanvas:this.props.OffCanvas,
      SideNavBar:this.props.SideNavBar,
    }
  }
  render() {
    const props = this.props;
    console.log(props)
    if(props.loading) return null;
    return (
      <Container id="container-body" fluid={true}>

        <main>

          <Row noGutters={true}>

            <SideNavBar size={3} toggle={this.toggle} open={this.state.SideNavBar} {...props} appRoutes={props.appRoutes}/>

            <Col id="container-content">


                <Switch>
                  {
                    this.flattenRoutes(props.route.routes).map((route, i)=>(
                      <Route key={i} path={route.path} exact={route.exact} render={match=>(
                        <div>
                          <route.component
                            {...props}
                            layout={{
                              toggle:this.toggle
                            }}
                            />
                        </div>
                        )}>
                      </Route>
                    ))
                  }
                </Switch>

            </Col>

          </Row>

        </main>

        <OffCanvas {...props}
          isOpen={this.state.OffCanvas}
          close={this.toggle.bind(this,'OffCanvas')}>
          <CardBlock><DefaultFormComponent {...props} /></CardBlock>
        </OffCanvas>

      </Container>
    )
  }
}
SidebarLayoutComponent.defaultProps = {
  SideNavBar:true,
  OffCanvas:false
}

export default SidebarLayout = createContainer (DefaultPageConstructor, SidebarLayoutComponent)
