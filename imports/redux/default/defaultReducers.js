import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';

import {
  LINKS_ALL_SUBSCRIPTION_READY,
  LINKS_ALL_SUBSCRIPTION_CHANGED,
  LINKS_SUB,
} from '/imports/redux/default/defaultActions';

const initialState = {
  fetching:false,
  ready:false,
  linksSubscriptionStopped:false,
  links:[]
}

export default function reducer(state=initialState, action) {
  
  switch (action.type) {
    case LINKS_ALL_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
      };
  
    case LINKS_ALL_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        links: action.payload,
      };
      
    case STOP_SUBSCRIPTION:
      return action.payload === LINKS_SUB
        ? { ...initialState, linksSubscriptionStopped: true }
        : state;
      
    case "GET_DEFAULT_LIST": {
      return {
        ...state,
        fetching:true
      }
    }
    case "SUCCESS_GET_DEFAULT_LIST": {
      return {
        ...state,
        list:action.payload,
        fetching:false,
        ready:true
      }
    }
  }
  
  return state
}
