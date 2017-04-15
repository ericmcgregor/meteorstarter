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

const data = {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "romain",
        "last": "hoogmoed"
      },
      "location": {
        "street": "1861 jan pieterszoon coenstraat",
        "city": "maasdriel",
        "state": "zeeland",
        "postcode": 69217
      },
      "email": "romain.hoogmoed@example.com",
      "login": {
        "username": "lazyduck408",
        "password": "jokers",
        "salt": "UGtRFz4N",
        "md5": "6d83a8c084731ee73eb5f9398b923183",
        "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
        "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
      },
      "dob": "1983-07-14 07:29:45",
      "registered": "2010-09-24 02:10:42",
      "phone": "(656)-976-4980",
      "cell": "(065)-247-9303",
      "id": {
        "name": "BSN",
        "value": "04242023"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "NL"
    }


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
