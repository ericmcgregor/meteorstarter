import { combineReducers } from "redux"

import defaults from "../default/defaultReducers"
import modal from "../modal/modalReducers"
import posts from '../posts/postReducers'

// IMPORT REDUCER

export default combineReducers({
    defaults,
    modal,
    posts,
    // ADD REDUCER
})
