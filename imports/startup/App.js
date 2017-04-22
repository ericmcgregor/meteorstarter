import React from 'react';
import {mount} from 'react-mounter';

import { Container, Row, Col } from 'reactstrap';
import DefaultNav from '/imports/ui/components/DefaultNav'
import SecondaryNav from '/imports/ui/components/SecondaryNav'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import routes from './routes'

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} {...route} />
  )}/>
)



const App = () =>{
  return (
    <div id="container-window">
      <Router>
        <Container id="container-body" fluid={true}>

          {routes.map((route, i) => (
            <Route key={i} path={route.path} render={(props)=>(
                <header>
                  <DefaultNav {...props} {...route} />
                  {route.secondaryNav ? <SecondaryNav {...props} {...route} /> : null}
                </header>
            )}/>
          ))}

          <main id="container-content">
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </main>


        </Container>
      </Router>
    </div>
  )
}

mount(App);
