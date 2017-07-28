import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import links from "./linksReducer"

export default combineReducers({
  tweets,
  user,
  links
})
