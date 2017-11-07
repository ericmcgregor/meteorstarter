import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import * as DefaultActions from '/imports/redux/default/defaultActions'
import './Home.scss'

export const Home =
  @connect((store) => {
    return {
      'defaults': store.defaults
    };
  })
  class Home extends React.Component {
  componentWillMount(){
    store.dispatch(DefaultActions.defaultAction())
  }
  render() {
    const props = this.props
    return (
      <div>
        <Container id={"Home"} className={"full-height"} fluid>
          <Row>
            <Col sm={4}>
              Sidebar Widget
            </Col>
            <Col sm={8}>
              Homepage Widget
            </Col>
          </Row>
        
        </Container>
      </div>
    )
  }
}

Home.defaultProps = {};

Home.propTypes = {};