import React from 'react';
import {Meteor} from 'meteor/meteor';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import ListField from 'uniforms-bootstrap4/ListField';
import ListItemField from 'uniforms-bootstrap4/ListItemField';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import TextField from 'uniforms-bootstrap4/ListItemField';
import AutoFields from 'uniforms-bootstrap4/AutoFields'; // Choose your theme package.
import LongTextField from 'uniforms-bootstrap4/LongTextField';
import AutoField from 'uniforms-bootstrap4/AutoField';

const DefaultFormComponent = class DefaultFormComponent extends React.Component {
  constructor(){
    super()
  }
  update(collection, doc){
    collection.update({_id:doc._id}, this.props.Collection.schema.clean(doc), {upsert:true})
  }
  render() {
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
