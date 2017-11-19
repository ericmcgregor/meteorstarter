import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import GlobalNav from "../../components/GlobalNav/GlobalNav";
import {Home} from "../../pages/Home/Home";
import ModalComponent from "../../components/ModalComponent/ModalComponent";




export default App = class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app-layout-container">
          <header>
            <GlobalNav />
          </header>
          
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <ModalComponent />
        </div>
      </Router>

    )
  }
}
