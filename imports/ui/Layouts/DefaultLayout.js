import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultFormComponent from '/imports/ui/defaultComponents/DefaultFormComponent'
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import PivotTableComponent from '/imports/ui/defaultComponents/PivotTable/PivotTableComponent'
import DefaultTableActions from '/imports/ui/defaultComponents/DefaultTableActions'
import SideNavBar from '/imports/ui/components/SideNavBar';

import { Container, Row, Col,
  Button,
  Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

const DefaultLayout = class DefaultLayout extends React.Component {
  render() {
    return (
      <Container id="container-body" fluid={true}>

        <Row noGutters={true}>

          <Col id="container-sidebar" xs={2} className={"SideNav"}>
            <SideNavBar />
          </Col>

          <Col id="container-content">
            <CardBlock>
              <DefaultTableActions {...this.props}/>

              <DefaultTableComponent {...this.props} />
            </CardBlock>

            <hr></hr>

            <CardBlock>
              <PivotTableComponent {...this.props} />
            </CardBlock>

              <CardBlock>

              <Card className="my-3">
                <CardHeader>Scheam editor</CardHeader>
                <CardBlock>
                  <DefaultFormComponent {...this.props} />
                </CardBlock>
              </Card>

              </CardBlock>
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
