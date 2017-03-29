import React from 'react';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Data from '/imports/api/Data'
import Page from './Page'

const PageConstructor = (params) => {
  const subscription = Meteor.subscribe('data');

  let loading = true;

  if(subscription.ready()){
    loading=false;
  }

  return {
    loading:loading,
    params,
    Data:Data.find().fetch(),
  }

}

const Container = createContainer (PageConstructor, Page)

export default Container;
