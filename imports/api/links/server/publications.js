// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';

Meteor.publish('links.all', function (query={}, search) {
  if (search) {
      let regex = new RegExp(search, 'i');
      query = {
          ...query,
          $or: [{
            name: regex
          }, ]
      }
    }
  return Links.find(query, {});
});
