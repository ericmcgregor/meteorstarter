import React from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Button} from 'reactstrap';
import {connect} from "react-redux"

import './Home.scss'

import StoreList from "../../components/StoreList/StoreList";

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
                    <Col sm={12}>

                        <Row>
                            <Col sm={12}>
                                <div className="d-flex">
                                    <h3>Collections</h3>
                                    <div className="ml-auto">
                                        <Button onClick={addPost}>Add Post</Button>
                                    </div>
                                </div>
                                <StoreList />
                            </Col>


                        </Row>

                        {/*<div>*/}
                            {/*<h3>A Default List of things</h3>*/}
                            {/*<ReactFormComponent />*/}
                        {/*</div>*/}

                        {/*<ReactTableComponent />*/}

                        {/*<h3>Modal</h3>*/}

                        {/*<TriggerModalButton />*/}
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