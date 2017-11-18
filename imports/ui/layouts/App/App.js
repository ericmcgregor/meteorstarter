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
        <div>
        <header>
          <GlobalNav />
        </header>
        
        <main className="full-height">
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
        </main>
          <ModalComponent />
        </div>
      </Router>

    )
  }
}
