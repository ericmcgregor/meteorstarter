import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProductSetCollection from '/imports/projects/data/ProductSet/ProductSetCollection';

export default createContainer((props)=>{
  let subscription = Meteor.subscribe('productset.list', {type:props.match.params.type}, props.search[props.match.params.type]);

  if(subscription.ready()==true) {
    ProductSets = ProductSetCollection.find({type:props.match.params.type}, options).fetch();
  }
  return {
    ...props,
    ProductSets
  }
}, (props)=>{
  return (
    <div>

    </div>
  )
})
