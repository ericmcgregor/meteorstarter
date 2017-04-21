import React from 'react';
import {mount} from 'react-mounter';

import { Container, Row, Col } from 'reactstrap';
import DefaultNav from '/imports/ui/components/DefaultNav'
import DeaultPage from '/imports/ui/Pages/DefaultPage';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

const routes = [
  // { path: '/',
  //   exact:true,
  //   component: (route) => <Redirect to={{
  //       pathname: '/defaults/basic'
  //   }}/>
  // },
  { path: '/defaults',
    title:'Template Name',
    component: (route) => <DeaultPage {...route} />
  },
  { path: '/test',
    title:'test page',
    component: (route) => <div><h2>test</h2></div>
  }
]

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
                <DefaultNav {...props} {...route} />
            )}/>
          ))}


          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

        </Container>
      </Router>
    </div>
  )
}

mount(App);
