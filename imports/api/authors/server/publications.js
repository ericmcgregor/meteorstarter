// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Authors } from '../authors.js';


Meteor.publish('authors.all', function (query={}, search) {
  if (search) {
      let regex = new RegExp(search, 'i');
      query = {
          ...query,
          $or: [{
            name: regex
          }, ]
      }
    }
  return Authors.find(query, {});
});
