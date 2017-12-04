import React from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Button} from 'reactstrap';
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
import GrapherCollectionListContainer from "../../components/CollectionList/GrapherCollectionList";
import {Posts} from "../../../api/posts/posts";

const addPost = () => {
    Meteor.call('posts.insert', {title:"new test"})
}


export const Home =
  @connect((store) => {
    return {
      'defaults': store.defaults
    };
  })
  class Home extends React.Component {
    render() {
        return (
            <Container id={"Home"} className={""} fluid>
                <Row>
                    <Col sm={2}>
                        <div>
                            Sidebar Widget
                        </div>
                    </Col>
                    <Col sm={10}>



                        <Link to={'/test'}>go to ttest</Link>
                        <br/>
                        <Row>
                            <Col sm={12}>
                                <div className="d-flex">
                                    <h3>Reactive Grapher Collection</h3>
                                    <div className="ml-auto">
                                        <Button onClick={addPost}>Add Post</Button>
                                    </div>
                                </div>
                                <GrapherCollectionListContainer />
                            </Col>
                            <Col sm={12}>
                                <h3>Redux  Collection</h3>
                                <ReduxCollectionList links={this.props.defaults.list}/>
                            </Col>
                            <Col sm={12}>
                                <h3>Reactive Meteor Collection</h3>
                                <MeteorCollectionList links={this.props.defaults.list}/>
                            </Col>
                            <Col sm={12}>
                                <h3>Reactive Meteor AND Redux Collection</h3>
                                <MeteorReduxCollectionListContainer />
                            </Col>

                        </Row>

                        <div>
                            <h3>A Default List of things</h3>
                            <ReactFormComponent />
                        </div>

                        <ReactTableComponent />

                        <h3>Modal</h3>

                        <TriggerModalButton />
                    </Col>
                </Row>
            </Container>
        )
        const props = this.props
        // if(props.defaults.fetching || !props.defaults.ready) return <div>fetching...</div>
    }
  }
  

Home.defaultProps = {};
Home.propTypes = {};
//
// "react": "^15.5.4",
//   "react-dom": "^15.5.4",
//   "react-redux": "^5.0.5",
//   "react-router-dom": "^4.1.1",