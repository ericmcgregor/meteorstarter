import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import * as DefaultActions from '/imports/redux/default/defaultActions'
import {TriggerModalButton} from "../../components/ModalComponent/TriggerModalButton";
import MeteorCollectionListContainer from "../../components/CollectionList/MeteorCollectionList";
import ReduxCollectionList from "../../components/CollectionList/ReduxCollectionList";

import './Home.scss'

export const Home =
  @connect((store) => {
    return {
      'defaults': store.defaults
    };
  })
  class Home extends React.Component {
    componentWillMount(){
      if(!this.props.defaults.ready) {
        store.dispatch(DefaultActions.getDefaultList())
      }
    }
    render() {
      const props = this.props
      if(props.defaults.fetching || !props.defaults.ready) return <div>fetching...</div>
      return (
        <div>
          <Container id={"Home"} className={"full-height"} fluid>
            <Row>
              <Col sm={2}>
                Sidebar Widget
              </Col>
              <Col sm={10}>
                <h3>A Default List of things</h3>
                <ReduxCollectionList list={this.props.defaults.list}/>
                <TriggerModalButton />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }

Home.defaultProps = {};
Home.propTypes = {};