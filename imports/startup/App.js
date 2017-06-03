import React from 'react';
import {mount} from 'react-mounter';

import { Container, Row, Col } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

//uncomment this line for instructions:
// import appRoutes from './routes'

// uncomment this line:
import appRoutes from '/imports/projects/routes'

const RouteWithSubRoutes = (route) => {
  return (
    <Route path={route.path} render={match => {
      // console.log('routewsubroute: ', match)
      return (<route.component route={route} appRoutes={appRoutes} {...match}/>)
    }} />
  )
}

const App = () =>{
  return (
    <Router>
      <div id="container-window">
        <Switch>
        {appRoutes.map((route, i) => (
          <Route key={i} path={route.path} render={(match)=>{
              // console.log('app: ', match)
              return (
                <RouteWithSubRoutes {...match} {...route} appRoutes={appRoutes} />
            )
            }}/>
        ))}
        </Switch>
      </div>
    </Router>
  )
}

mount(App);

// const App = () =>{
//   return (
//     <div id="container-window">
//       <Router>
//         <Container id="container-body" fluid={true}>
//
//           {routes.map((route, i) => (
//             <Route key={i} path={route.path} render={(props)=>(
//                 <header>
//                   {console.log(route.primaryNav)}
//                   <DefaultNav {...props} {...route} />
//                   {route.primaryNav[props.location.pathname].secondaryNav ? <SecondaryNav secondaryNav={route.primaryNav[props.location.pathname].secondaryNav} {...props} {...route} /> : null}
//                 </header>
//             )}/>
//           ))}
//
//           <main>
//             {routes.map((route, i) => (
//               <RouteWithSubRoutes key={i} {...route} />
//             ))}
//           </main>
//
//
//         </Container>
//       </Router>
//     </div>
//   )
// }

//
// const RouteWithSubRoutes = (route) => {
//   return (
//     <Route path={route.path} render={props => {
//       return (<route.component route={route} appRoutes={appRoutes}/>)
//     }} />
//   )
// }
//
