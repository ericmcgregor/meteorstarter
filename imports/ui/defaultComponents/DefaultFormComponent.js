import React from 'react';
import {Meteor} from 'meteor/meteor';
import AutoForm from 'uniforms-bootstrap4/AutoForm';

const DefaultFormComponent = class DefaultFormComponent extends React.Component {
  constructor(){
    super()
  }
  update(collection, doc){
    console.log(data, collection)
    collection.update({_id:doc._id}, this.props.Collection.schema.clean(data), {upsert:true})
  }
  render() {
    window.collection = this.props.Collection
    return (
      <AutoForm
        model={this.props.model}
        schema={this.props.Collection.schema}
        onSubmit={this.update.bind(this, this.props.Collection)}
        >

      </AutoForm>
    )
  }
}

DefaultFormComponent.defaultProps = {
  model:{}
}

export default DefaultFormComponent;
