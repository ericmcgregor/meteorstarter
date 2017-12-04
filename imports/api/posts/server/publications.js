// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts.js';


Meteor.publish('posts.all', function (query={}, search) {
  if (search) {
      let regex = new RegExp(search, 'i');
      query = {
          ...query,
          $or: [{
            name: regex
          }, ]
      }
    }
  return Posts.find(query, {});
});
