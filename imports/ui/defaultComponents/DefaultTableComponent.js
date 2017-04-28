import React from 'react';
import {Meteor} from 'meteor/meteor';
import ReactTable from 'react-table'
import { ReactTableDefaults } from 'react-table'
import DefaultTableRowActions from './DefaultTableRowActions'

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

const DefaultTableComponent = class DefaultTableComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: {}
    }
  }
  render() {
    const props = this.props
    return (
      <ReactTable
          data={this.props.Data}
          columns={[
            {
              accessor:"picture.medium",
              width:70,
              hideFilter:true,
              render:({value, rowValues, row, index, viewIndex})=>{
                return (
                  <img src={value} className="avatar" style={{borderRadius:"50px", width:"45px", height:"45px"}}/>
                )
              }
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
            {
              header:"cell",
              accessor:"cell"
            },
            {
              header:"options",
              width:100,
              hideFilter:true,
              render:(d) => <DefaultTableRowActions d={d} {...this.props}/>
            }
          ]}
          pageSize={this.props.Data.length}
          {...this.props.tableOptions}
        />
    )
  }
}

export default DefaultTableComponent;
