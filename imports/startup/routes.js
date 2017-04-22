import React from 'react';
import DeaultPage from '/imports/ui/Pages/DefaultPage';

const routes = [
  // { path: '/',
  //   exact:true,
  //   component: (route) => <Redirect to={{
  //       pathname: '/defaults/basic'
  //   }}/>
  // },
  { path: '/defaults',
    title:'Template Name',
    component: (route) => <DeaultPage {...route} />,
    secondaryNav:[]
  },
  { path: '/test',
    title:'test page',
    component: (route) => <div><h2>test</h2></div>
  }
]

export default routes;
