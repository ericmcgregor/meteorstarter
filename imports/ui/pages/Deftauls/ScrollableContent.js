import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import store from "/imports/redux/store"
import {connect} from "react-redux"

import ReactTableComponent from "../../components/examples/ReactTableComponent/ReactTableComponent";
import ReduxCollectionList from "../../components/examples/CollectionList/ReduxCollectionList";
import {TriggerModalButton} from "../../components/ModalComponent/TriggerModalButton";

export const ScrollableContentPage =
  @connect((store) => {
    return {
      'defaults': store.defaults
    };
  })
class ScrollableContentPage extends React.Component {
  componentWillMount(){
    if(!this.props.defaults.ready) {
      store.dispatch(DefaultActions.getDefaultList())
    }
  }
  render() {
    const props = this.props
    // if(props.defaults.fetching || !props.defaults.ready) return <div>fetching...</div>
    return (
      <Container id={"Home"} className={"fixed-container"} fluid>
        <Row>
          <Col sm={2}>
            sidebar
          </Col>
          <Col sm={10}  className={'scroll'}>
            <h3>MainColumn</h3>
            <ReactTableComponent />
            <ReduxCollectionList list={this.props.defaults.list}/>
            <TriggerModalButton />
          </Col>
        </Row>
      </Container>
    )
  }
}


ScrollableContentPage.defaultProps = {};
ScrollableContentPage.propTypes = {};
