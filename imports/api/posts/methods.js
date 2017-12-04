// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts.js';
import './db/posts.queries'
import {Links} from "../links/links";

Meteor.methods({
  'posts.insert'({title}) {
    check(title, String);
    let linkId = Links.insert({
        title:"testing link",
        url:"test"
    })
    let _id = Posts.insert({
      title:'testing link',
      createdAt: new Date(),
      linkId
    });


  },
  'posts.remove'({_id}) {
    check(_id, String);

    return Posts.remove(_id);
  },
  postsQueryGetAll() {
      const query = postsAll.clone()
      return query.fetch();
  }
  // 'links.get'(){
  //   console.log('etst')
  //   return Links.find().fetch();
  // }
});
