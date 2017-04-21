import React from 'react';
import {Meteor} from 'meteor/meteor';
import SideNavBar from '/imports/ui/components/SideNavBar';

import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const DefaultLayout = class DefaultLayout extends React.Component {
  render() {
    return (
      <Router id="container-window">
        <Container id="container-body" fluid={true}>

          <Row noGutters={true}>

            <SideNavBar />

            <Col id="container-content">

            </Col>

            <Col xs={8} hidden className="offCanvas">
              offcanvas
            </Col>

          </Row>

        </Container>
      </Router>

    )
  }

}

DefaultLayout.defaultProps = {

}


export default DefaultLayout;
