import React from 'react';
import {Meteor} from 'meteor/meteor';
import ReactTable from 'react-table'
import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  showPagination:false,
  pageSize:1,
  getTheadThProps:()=>{
    return {
      style:{
        textAlign:"left"
      }
    }
  }
});

const PivotTableComponent = class PivotTableComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: {}
    }
  }
  render() {
    return (
      <ReactTable
          data={this.props.Data}
          columns={[
            {
              header:"gender",
              accessor:"gender",
              width:150
            },
            {
              id:"fullName",
              header:"name",
              accessor:(d)=>d.name.first +" "+ d.name.last
            },
            {
              id:"username",
              header:"username",
              accessor:"login.username"
            },

          ]}
          pivotBy={['gender']}
          pageSize={this.props.Data.length}
          {...this.props.tableOptions}
        />
    )
  }
}

export default PivotTableComponent;
