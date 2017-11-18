// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'({title, url}) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
  'links.remove'(_id) {
    check(_id, String);
    
    return Links.remove(_id);
  },
  'links.get'(){
    console.log('etst')
    return Links.find().fetch();
  }
});
