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
import LayoutController from './LayoutController'
import DefaultFormComponent from '/imports/ui/defaultComponents/DefaultFormComponent'


const SidebarLayoutComponent = class SidebarLayoutComponent extends LayoutController {
  render() {
    const props = this.props;
    if(props.loading) return null;
    return (
      <Container id="container-body" fluid={true}>

        <main>

          <Row noGutters={true}>

            {this.state.SideNavBar ? <SideNavBar size={1} toggle={this.toggle} open={this.state.SideNavBar} {...props} /> : null}

            <Col id="container-content">

              <CardBlock>
                <div >
                  <Button onClick={this.toggle.bind(this,'SideNavBar')}>SideNavBar</Button>
                  <Button onClick={this.toggle.bind(this,'OffCanvas')}>Offcanvas</Button>
                </div>

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

              </CardBlock>
            </Col>

            <OffCanvas {...props}
              isOpen={this.state.OffCanvas}
              close={this.toggle.bind(this,'OffCanvas')}>
              <CardBlock><DefaultFormComponent {...props} /></CardBlock>
            </OffCanvas>

          </Row>
        </main>
      </Container>
    )
  }
}
SidebarLayoutComponent.defaultProps = {
  SideNavBar:true,
  OffCanvas:false
}

export default SidebarLayout = createContainer (DefaultPageConstructor, SidebarLayoutComponent)
