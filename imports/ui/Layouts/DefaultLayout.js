import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {
  Container, Row, Col, CardBlock, Button,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import { DefaultPageConstructor } from '/imports/ui/Containers/DefaultContainer'
import DropdownNav from '/imports/ui/components/Nav/DropdownNav'
import {Route, Switch} from 'react-router-dom'
import LayoutController from './LayoutController'

import OffCanvas from '/imports/ui/components/OffCanvas';
import SidePanel from '/imports/ui/components/SidePanel';

const DefaultLayoutComponent = class DefaultLayoutComponent extends LayoutController {
  render() {
    const props = this.props;
    if(props.loading) return null;
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

            {this.state.SideNavBar ? <SidePanel size={3} toggle={this.toggle.bind(this, 'SideNavBar')} {...props} /> : null}

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

            <OffCanvas {...props}
              isOpen={this.state.OffCanvas}
              close={this.toggle.bind(this,'OffCanvas')}>
              <div>Offcanvas content</div>
            </OffCanvas>

          </Row>
        </main>
      </Container>
    )
  }
}


export default DefaultLayout = createContainer (DefaultPageConstructor, DefaultLayoutComponent)
