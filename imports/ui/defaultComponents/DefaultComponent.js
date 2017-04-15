import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultFormComponent from './DefaultFormComponent'
import DefaultTableComponent from './DefaultTableComponent'
import SideNavBar from '/imports/ui/components/SideNavBar';

import { Container, Row, Col,
  Button,
  Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

const DefaultComponent = class DefaultComponent extends React.Component {
  add(Collection) {
    let doc = {}
    Collection.schema.clean(doc)
    console.log(doc)
  }
  render() {
    return (
      <Container id="container-body" fluid={true} noGutters={true}>

        <Row noGutters={true}>
          <Col id="container-sidebar" xs={2} className={"SideNav"}>
            <SideNavBar />
          </Col>

          <Col id="container-content">
            <CardBlock>
              <Button color="primary" onClick={this.add.bind(this, this.props.Collection)}>add</Button>
              <DefaultTableComponent {...this.props} />
            </CardBlock>

            <hr></hr>

              <CardBlock>

              <Card className="my-3">
                <CardHeader>Scheam editor</CardHeader>
                <CardBlock>
                  <DefaultFormComponent {...this.props} />
                </CardBlock>
              </Card>

              </CardBlock>
          </Col>
        </Row>
        
      </Container>
    )
  }

}

DefaultComponent.defaultProps = {

}
//


export {DefaultComponent};
