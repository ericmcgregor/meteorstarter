import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import GlobalNav from "../../components/GlobalNav/GlobalNav";
import {Home} from "../../pages/Home/Home";




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
        </div>
      </Router>

    )
  }
}
