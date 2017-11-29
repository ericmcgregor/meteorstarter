import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import {Table} from "reactstrap";
import {compose} from "redux";
import {Links} from '/imports/api/links/links'
import { withTracker } from 'meteor/react-meteor-data';
import {LINKS_SUB, loadLinks} from "../../../redux/default/defaultActions";
import { stopSubscription } from 'meteor-redux-middlewares';


class CollectionList extends Component {
  componentDidMount() {
    this.props.loadLinks();
  }
  componentWillUnmount() {
    this.props.stopLinksSubscription();
  }
  render() {
    if(!this.props.ready) return <div>not ready</div>
    return (
      <div>
        <Table>
          <tbody>
          {this.props.links.map((item, i)=>{
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


const mapStateToProps = (state, ownProps) => {
  return {
    ...state.defaults
  }
};

const mapDispatchToProps = dispatch => ({
  loadLinks: () => dispatch(loadLinks()),
  stopLinksSubscription: () => dispatch(stopSubscription(LINKS_SUB)),
});

const MeteorReduxCollectionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList);

export default MeteorReduxCollectionListContainer;