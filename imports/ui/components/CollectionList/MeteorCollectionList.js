import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import {Table} from "reactstrap";
import {compose} from "redux";
import {Links} from '/imports/api/links/links'
import { withTracker } from 'meteor/react-meteor-data';



class CollectionList extends Component {
  render() {
    return (
      <div>
        <Table>
          <tbody>
          {this.props.tasks.map((item, i)=>{
            return (
              <tr key={i}>
                <td>{item.title}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}

CollectionList.propTypes = {};
CollectionList.defaultProps = {};


const MeteorCollectionListContainer = compose(
  withTracker((props)=>{
    const handle = Meteor.subscribe('links.all');
    const tasks = Links.find().fetch();
    return {
      loading:!handle.ready(),
      tasks
    };
  }),
  connect((store) => {
    return {
      'defaults': store.defaults,
    };
  })
)(CollectionList);


export default MeteorCollectionListContainer;