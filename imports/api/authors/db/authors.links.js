import {Authors} from "../authors";
import Meteor from 'meteor/meteor'

Authors.addLinks({
    'linksData': {
        type: 'many',
        collection: 'links',
        field: 'linksIds',
        index: true,
        denormalize: {
            body: {
              _id:1,
              title: 1,
            },
            field: 'linksCache',
        }
    },
  'postsData': {
    type: 'many',
    collection: 'posts',
    field: 'postsIds',
    index: true,
    denormalize: {
      body: {
        _id:1,
        title: 1,
      },
      field: 'postsCache',
    }
  }
})
