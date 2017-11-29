import { Tracker } from 'meteor/tracker';
import createReactiveMiddlewares from 'meteor-redux-middlewares';

import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const {
  sources,
  subscriptions,
} = createReactiveMiddlewares(Tracker);

const middleware = applyMiddleware(sources, subscriptions, promise(), thunk, logger)

export default createStore(reducer, middleware)
