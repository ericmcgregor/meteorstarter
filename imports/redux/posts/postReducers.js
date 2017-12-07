import { STOP_SUBSCRIPTION } from 'meteor-redux-middlewares';

import {
  POSTS_ALL_SUBSCRIPTION_READY,
  POSTS_ALL_SUBSCRIPTION_CHANGED,
  POSTS_SUB,
} from '/imports/redux/posts/postActions';

const initialState = {
  fetching:false,
  ready:false,
  postsSubscriptionStopped:false,
  posts:[],
}

export default function reducer(state=initialState, action) {
  
  switch (action.type) {
    case POSTS_ALL_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
      };
  
    case POSTS_ALL_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        posts: action.payload,
      };
      
    case STOP_SUBSCRIPTION:
      return action.payload === POSTS_SUB
        ? { ...initialState, postsSubscriptionStopped: true }
        : state;
      
  }
  
  return state
}
