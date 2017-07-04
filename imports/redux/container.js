import React from "react"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import store from "./store"


export default (props) => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
