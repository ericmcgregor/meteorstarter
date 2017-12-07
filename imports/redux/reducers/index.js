import { combineReducers } from "redux"

import modal from "../modal/modalReducers"
import posts from '../posts/postReducers'

import authors from '../authors/authorsReducers'
import links from '../links/linksReducers'
// IMPORT REDUCER

export default combineReducers({
    modal,
    posts,
    authors,
links,
// ADD REDUCER
})
