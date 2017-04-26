import React from 'react';
import DefaultPage from '/imports/ui/Pages/DefaultPage';
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import PivotTableComponent from '/imports/ui/defaultComponents/PivotTable/PivotTableComponent'

import {
  Redirect
} from 'react-router-dom'

const TablesRoute = [
  {
    path: '/tables',
    title:'Tables Tempalte',
    component: DefaultPage,
    routes: [
        { path: "/tables/basic",
          title:'Basic',
          exact:true,
          component:DefaultTableComponent,
          routes:[
            { path: "/tables/basic/examples",
              title:'examples',
              component:()=>(<div>examples page</div>),
            },
            { path: "/tables/basic/docs",
              title:'docs',
              component:()=>(<div>docs page</div>),
            },
            { path: "/tables/basic/:id",
              component:()=>(<div>Example deep error page.  This route does not exist</div>)
            }
          ]
        },
        { path: '/tables/pivot',
          title:'Pivot',
          component:PivotTableComponent
        },
        { path: '/tables/:id',
          component:()=>(<div>Example error page.  This route does not exist</div>)
        },
        { path: '/tables',
          exact:true,
          component:()=>(<div>table landing page</div>)
        },
      ],
  }
]

const FormsRoute = [
  {
    path: '/forms',
    title:'Forms Tempalte',
    component: DefaultPage,
    routes: [
        { path: "/forms/standard",
          title:'Standard',
          component:DefaultTableComponent,
        },
        { path: '/forms/advanced',
          title:'Advanced',
          component:PivotTableComponent
        },
        { path: '/forms/:id',
          component:()=>(<div>Example error page.  This route does not exist</div>)
        },
        { path: '/forms',
          exact:true,
          component:()=>(<div>forms landing page</div>)
        },
      ],
  }
]

const routes = [
  ...TablesRoute,
  ...FormsRoute
]

export default routes;
