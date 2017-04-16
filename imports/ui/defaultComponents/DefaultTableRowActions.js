import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Button, ButtonGroup} from 'reactstrap';


const DefaultTableRowActions = class DefaultTableRowActions extends React.Component {
  remove(collection, _id){
    collection.remove(_id)
  }
  edit(Store, model){
    Store.set('model', model);
  }
  render() {
    return (
      <div className="text-center options-container d-flex align-items-stretch ">
        <ButtonGroup>
          <Button>
            <i className="fa fa-pencil" onClick={this.edit.bind(this, this.props.Store, this.props.d.row)}></i>
          </Button>
          <Button>
            <i className="fa fa-trash" onClick={this.remove.bind(this, this.props.Collection, this.props.d.row._id)}></i>
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default DefaultTableRowActions;
