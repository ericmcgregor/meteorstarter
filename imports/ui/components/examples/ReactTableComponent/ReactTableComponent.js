import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import store from "/imports/redux/store"
import {connect} from "react-redux"
import {Links} from '/imports/api/links/links'
import { withTracker } from 'meteor/react-meteor-data';

@connect((store) => {
  return {
    'defaults': store.defaults,
  };
})
class ReactTableComponent extends Component {
  render() {
    if(!this.props.defaults.ready) return <div>FETCHING...</div>
    return (
      <ReactTable
        data={this.props.defaults.list}
        columns={[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                accessor: "title"
              },
            ]
          },
          {
            Header: "Description",
            columns: [
              {
                Header: "Description",
                accessor: "url"
              },
            ]
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

ReactTableComponent.propTypes = {};
ReactTableComponent.defaultProps = {};

export default ReactTableComponent;
