// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Authors } from './authors.js';
import { authorsAll } from './db/authors.queries'

Meteor.methods({
  'authors.insert'({title}) {
    check(title, String);

    let _id = Authors.insert({
      title:'testing link',
      createdAt: new Date(),
      description:"test description"
    });

  },
  'authors.remove'({_id}) {
    check(_id, String);

    return Authors.remove(_id);
  },
  authorsQueryGetAll() {
      const query = authorsAll.clone()
      return query.fetch();
  }
});
