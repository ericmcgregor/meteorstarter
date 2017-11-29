import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import * as DefaultActions from '/imports/redux/default/defaultActions'
import {Link} from "react-router-dom";


export const DefaultPage =
  @connect((store) => {
    return {
      'defaults': store.defaults
    };
  })
class DefaultPage extends React.Component {
  componentWillMount(){
    if(!this.props.defaults.ready) {
      store.dispatch(DefaultActions.getDefaultList())
    }
  }
  render() {
    const props = this.props
    // if(props.defaults.fetching || !props.defaults.ready) return <div>fetching...</div>
    return (
      <Container id={"Home"} className={""} fluid>
        <Row>
          <Col sm={12}>
            <h3>MainColumn</h3>
            <Link to={'/'}>go to ttest</Link>

          </Col>
        </Row>
      </Container>
    )
  }
}


DefaultPage.defaultProps = {};
DefaultPage.propTypes = {};
