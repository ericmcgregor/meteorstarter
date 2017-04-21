import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Data from '/imports/api/Data'

const Store = new ReactiveDict();
Store.set('find', {})
window.Store = Store

const DefaultPageConstructor = (params) => {
  const subscription = Meteor.subscribe('data', {});

  let loading = true;

  if(subscription.ready()){
    loading=false;
  }

  return {
    loading:loading,
    params,
    Collection:Data,
    Data:Data.find({}).fetch(),
    model:Store.get('model'),
    tableOptions:Store.get('tableOptions'),
    Store
  }

}

export {DefaultPageConstructor};
