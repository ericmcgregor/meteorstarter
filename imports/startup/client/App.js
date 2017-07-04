import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import FullPage from '/imports/ui/Pages/FullPage'
import Sidebar from '/imports/ui/Pages/Sidebar'
import API from '/imports/redux/container'
import Home from '/imports/ui/Pages/Home'

const App = class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/fullpage" component={FullPage} />
          <Route path="/sidebar" component={Sidebar} />
          <Route path="/api" component={API} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
