import React from 'react';
import DefaultLayout from '/imports/ui/Layouts/DefaultLayout';
import SidebarLayout from '/imports/ui/Layouts/SidebarLayout';
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import PivotTableComponent from '/imports/ui/defaultComponents/PivotTable/PivotTableComponent'
import TablesBasicPage from '/imports/ui/Pages/TablesBasicPage'
import DefaultNav from '/imports/ui/components/DefaultNav'

import {
  Redirect
} from 'react-router-dom'

const SidebarNavRoute = [
  {
    path: '/sidebarnav',
    title:'Sidebar Nav',
    component: SidebarLayout,
    routes: [
        { path: "/sidebarnav/basic",
          title:'Basic',
          exact:true,
          component:TablesBasicPage,
          routes:[
            { path: "/sidebarnav/basic/examples",
              title:'examples',
              component:()=>(<div>examples page</div>),
            },
            { path: "/sidebarnav/basic/docs",
              title:'docs',
              component:()=>(<div>docs page</div>),
            },
            { path: "/sidebarnav/basic/:id",
              component:()=>(<div>Example deep error page.  This route does not exist</div>)
            }
          ]
        },
        { path: '/sidebarnav/pivot',
          title:'Pivot',
          component:PivotTableComponent
        },
        { path: '/sidebarnav/test',
          title:'Test',
          component:()=>(<div>test</div>)
        },
        { path: '/sidebarnav/:id',
          component:()=>(<div>Example error page.  This route does not exist</div>)
        },
        { path: '/sidebarnav',
          exact:true,
          component:()=>(<Redirect to={'/sidebarnav/basic'} />)
        },
      ],
  },
]

const DefaultNavRoute = [
  {
    path: '/defaultnav',
    title:'Default Nav',
    component: DefaultLayout,
    nav:DefaultNav,
    routes: [
        { path: "/defaultnav/basic",
          title:'Basic',
          exact:true,
          component:TablesBasicPage,
          routes:[
            { path: "/defaultnav/basic/examples",
              title:'examples',
              component:()=>(<div>examples page</div>),
            },
            { path: "/defaultnav/basic/docs",
              title:'docs',
              component:()=>(<div>docs page</div>),
            },
            { path: "/sidebarnav/basic/:id",
              component:()=>(<div>Example deep error page.  This route does not exist</div>)
            }
          ]
        },
        { path: '/defaultnav/pivot',
          title:'Pivot',
          component:PivotTableComponent
        },
        { path: '/defaultnav/:id',
          component:()=>(<div>Example error page.  This route does not exist</div>)
        },
        { path: '/defaultnav',
          exact:true,
          component:()=>(<Redirect to={'/defaultnav/basic'} />)
        },
      ],
  }
]

const DropdownNavRoute = [
  {
    path: '/dropdown',
    title:'Dropdown Nav',
    component: DefaultLayout,
    routes: [
        { path: "/dropdown/standard",
          title:'Standard',
          exact:true,
          component:DefaultTableComponent,
          routes:[
            { path: "/dropdown/standard/examples",
              title:'examples',
              component:()=>(<div>examples page</div>),
            },
            { path: "/dropdown/standard/docs",
              title:'docs',
              component:()=>(<div>docs page</div>),
            },
            { path: "/dropdown/standard/:id",
              component:()=>(<div>Example deep error page.  This route does not exist</div>)
            }
          ]
        },
        { path: '/dropdown/advanced',
          title:'Advanced',
          component:PivotTableComponent
        },
        { path: '/dropdown/:id',
          component:()=>(<div>Example error page.  This route does not exist</div>)
        },
        { path: '/dropdown',
          exact:true,
          component:()=>(<div>forms landing page</div>)
        },
      ],
  }
]

const routes = [
  ...SidebarNavRoute,
  ...DropdownNavRoute,
  ...DefaultNavRoute,
  { path: '/',
    exact:true,
    component:SidebarLayout
  },
]

export default routes;
