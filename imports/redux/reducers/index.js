import { combineReducers } from "redux"

import defaults from "../default/defaultReducers"
import modal from "../modal/modalReducers"

export default combineReducers({
  defaults,
  modal
})
