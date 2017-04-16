import React from 'react';
import {Meteor} from 'meteor/meteor';
import SideNavBar from '/imports/ui/components/SideNavBar';

import { Container, Row, Col } from 'reactstrap';


const DefaultLayout = class DefaultLayout extends React.Component {
  render() {
    return (
      <Container id="container-body" fluid={true}>

        <Row noGutters={true}>

          <Col id="container-sidebar" xs={2} className={"SideNav"}>
            <SideNavBar />
          </Col>

          <Col id="container-content">
            {this.props.children}
          </Col>

          <Col xs={8} hidden className="offCanvas">
            offcanvas
          </Col>

        </Row>

      </Container>
    )
  }

}

DefaultLayout.defaultProps = {

}


export default DefaultLayout;
