import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';

import {
  AUTHORS_ALL_SUBSCRIPTION_READY,
  AUTHORS_ALL_SUBSCRIPTION_CHANGED,
  AUTHORS_SUB,
} from '/imports/redux/authors/authorsActions';

const initialState = {
  fetching:false,
  ready:false,
  authorsSubscriptionStopped:false,
  authors:[]
}

export default function reducer(state=initialState, action) {

  switch (action.type) {
    case AUTHORS_ALL_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
      };

    case AUTHORS_ALL_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        authors: action.payload,
      };

    case STOP_SUBSCRIPTION:
      return action.payload === AUTHORS_SUB
        ? { ...initialState, authorsSubscriptionStopped: true }
        : state;

  }

  return state
}
