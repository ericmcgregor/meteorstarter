import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import * as DefaultActions from '/imports/redux/default/defaultActions'
import {TriggerModalButton} from "../../components/ModalComponent/TriggerModalButton";
import ReduxCollectionList from "../../components/CollectionList/ReduxCollectionList";
import MeteorCollectionList from "../../components/CollectionList/MeteorCollectionList";

import './Home.scss'
import ReactTableComponent from "../../components/ReactTableComponent/ReactTableComponent";
import ReactFormComponent from "../../components/ReactForm/ReactFormComponent";
import MeteorReduxCollectionListContainer from "../../components/CollectionList/MeteorReduxCollectionList";
import {Link} from "react-router-dom";

export const Home =
  @connect((store) => {
    return {
      'defaults': store.defaults
    };
  })
  class Home extends React.Component {
    render() {
      const props = this.props
      // if(props.defaults.fetching || !props.defaults.ready) return <div>fetching...</div>
      return (
          <Container id={"Home"} className={""} fluid>
            <Row>
              <Col sm={2}>
                <div>
                Sidebar Widget
                </div>
              </Col>
              <Col sm={10}>
                <div>
                  <h3>A Default List of things</h3>
                  <ReactFormComponent />
                </div>
                
                <Link to={'/test'}>go to ttest</Link>
                <h3>A Default List of things</h3>
                <Row>
                  <Col>
                    <MeteorCollectionList list={this.props.defaults.list}/>
                  </Col>
                  <Col>
                    {/*<ReduxCollectionList list={this.props.defaults.list}/>*/}
                    <MeteorReduxCollectionListContainer />
                  </Col>
                </Row>
                <ReactTableComponent />
  
                <h3>Modal</h3>
  
                <TriggerModalButton />
              </Col>
            </Row>
          </Container>
      )
    }
  }
  

Home.defaultProps = {};
Home.propTypes = {};
//
// "react": "^15.5.4",
//   "react-dom": "^15.5.4",
//   "react-redux": "^5.0.5",
//   "react-router-dom": "^4.1.1",