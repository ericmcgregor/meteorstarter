import { Meteor } from 'meteor/meteor';
import { registerReactiveSource } from 'meteor-redux-middlewares';
import { startSubscription } from 'meteor-redux-middlewares';
import {Links} from "../../api/links/links";

export const LINKS_ALL_SUBSCRIPTION_READY = 'LINKS_ALL_SUBSCRIPTION_READY';
export const LINKS_ALL_SUBSCRIPTION_CHANGED = 'LINKS_ALL_SUBSCRIPTION_CHANGED';
export const LINKS_SUB = 'links.all';

export const loadLinks = () =>
  startSubscription({
    key: LINKS_SUB,
    get: () => Links.find().fetch(),
    subscribe: () => Meteor.subscribe(LINKS_SUB),
  });


export function getDefaultList(_id) {
  return function (dispatch) {
    dispatch({type: "GET_DEFAULT_LIST"});
    Meteor.call('links.get', (err, response)=>{
      dispatch({type:'SUCCESS_GET_DEFAULT_LIST', payload:response})
    });
  }
}
export function defaultAction() {
  return {
    type: "DEFAULT_ACTION",
    payload: {
      name: "Will",
      age: 35,
    }
  }
}