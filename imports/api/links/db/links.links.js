import {Links} from "../links";
import Meteor from 'meteor/meteor'

Links.addLinks({
    'postsData':{
      collection:"posts",
      inversedBy:"linksData",
      denormalize: {
          body: {
            _id:1
          },
          field: 'postsCache',
      }
    },
    'authorsData':{
      collection:"authors",
      inversedBy:"linksData",
      denormalize: {
        body: {
          _id:1
        },
        field: 'authorsCache',
      }
    }
})
