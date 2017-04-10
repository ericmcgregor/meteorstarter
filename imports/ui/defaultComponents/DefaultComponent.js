import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultFormComponent from './DefaultFormComponent'
import DefaultTableComponent from './DefaultTableComponent'
import { Container, Row, Col,
  Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

const DefaultComponent = class DefaultComponent extends React.Component {
  render() {
    return (
      <Row>
        <Col>
            <Card className="my-3">
              <CardHeader>Scheam editor</CardHeader>
              <CardBlock>
                <DefaultFormComponent {...this.props} />
              </CardBlock>
            </Card>
        </Col>
        <Col xs="9">
          <CardBlock>
            <DefaultTableComponent {...this.props} />
          </CardBlock>
        </Col>
      </Row>
    )
  }

}

DefaultComponent.defaultProps = {

}

export {DefaultComponent};
