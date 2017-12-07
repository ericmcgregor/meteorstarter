import {Posts} from "../posts";
import Meteor from 'meteor/meteor'

Posts.addLinks({
  'linksData': {
    type: 'many',
    collection: 'links',
    field: 'linksIds',
    index: true,
    denormalize: {
        body: {
            _id:1
        },
        field: 'linksCache',
    }
  },
  'authorsData': {
    type: 'many',
    collection: 'authors',
    field: 'authorsIds',
    index: true,
    denormalize: {
        body: {
            title: 1,
            url:1
        },
        field: 'authorsCache',
    }
  }
})