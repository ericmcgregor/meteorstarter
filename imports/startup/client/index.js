import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Provider} from "react-redux"
import store from "/imports/redux/store"
import App from "../../ui/layouts/App/App";
import '/node_modules/react-table/react-table.css';
import { ReactTableDefaults } from 'react-table'
import '/imports/db/Links'



Object.assign(ReactTableDefaults, {
  getTheadTrProps:()=>{
    return {
      style:{
        textAlign:"left",
      }
    }
  },
  getTrProps:()=>{
    return {
      style:{
        textAlign:"left",
        alignItems:"center"
      }
    }
  }
});

Meteor.startup(() => {
  render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
});
