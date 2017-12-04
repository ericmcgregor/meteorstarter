// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Posts } from '../../api/posts/posts.js';

Meteor.startup(() => {



  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

    if (Posts.find().count() === 0) {
        const data = [
            {
                title: 'My first post',
                description:"test description",
                author:"eric",
                createdAt: new Date(),
                linkId:Links.findOne({title:"Do the Tutorial"})._id
            },
            {
                title: 'My second post',
                description:"test description",
                author:"eric",
                createdAt: new Date(),
                linkId:Links.findOne({title:"Read the Docs"})._id
            },
            {
                title: 'My third post',
                description:"test description",
                author:"eric",
                createdAt: new Date(),
                linkId:Links.findOne({title:"Discussions"})._id
            },
        ];

        data.forEach(post => Posts.insert(post));
    }

});
