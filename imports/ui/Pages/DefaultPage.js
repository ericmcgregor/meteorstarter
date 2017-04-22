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

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const DefaultPageComponent = class DefaultPageComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      SideNavBar:false,
      OffCanvas:false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(key) {
    this.setState({
      [key]: !this.state[key]
    });
  }
  render() {
    const props = this.props;
    if(props.loading) return null;
    return (
      <Row noGutters={true}>

        {this.state.SideNavBar ? <SideNavBar size={2} {...props} /> : null}

        <Col >
          <CardBlock>
            <Button onClick={this.toggle.bind(this,'SideNavBar')}>SideNavBar</Button>
            <Button onClick={this.toggle.bind(this,'OffCanvas')}>Offcanvas</Button>
            <Route path={`${props.match.url}/basic`} render={(match)=>{
                return (
                  <div>
                    <DefaultTableActions {...props}/>

                    <DefaultTableComponent {...props} />
                    <hr>
                    </hr>

                    <Card className="my-3">
                      <CardHeader>
                        Scheam editor
                      </CardHeader>
                      <CardBlock>
                        <DefaultFormComponent {...props} />
                      </CardBlock>
                    </Card>

                  </div>
                )
            }}/>

            <Route path={`${props.match.url}/pivot`} render={(match)=>{
                  return (
                    <CardBlock>
                      <DefaultTableActions {...props}/>

                      <PivotTableComponent {...props} />


                    </CardBlock>
                  )
            }}/>

          </CardBlock>
        </Col>

        {this.state.OffCanvas ? <Col xs={3} className="offCanvas">offcanvas</Col> : null}


      </Row>
    )
  }
}


export default DefaultPage = createContainer (DefaultPageConstructor, DefaultPageComponent)
