// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Posts } from '../../api/posts/posts.js';
import { Authors } from '../../api/authors/authors.js';
import { emptyArray } from "../../Utils";
import * as faker from 'faker'

Meteor.startup(() => {


  if(Authors.find().count() === 0) {
    const authors = emptyArray(120).forEach(item => {

      Authors.insert({
        ...faker.helpers.contextualCard(),
        createdAt: new Date(),
        postsIds:[],
        linksIds:[]
      });

    })

  }
  // if the Links collection is empty
  if (Links.find().count() === 0) {

    const links = emptyArray(100).forEach(item => {
      Links.insert({
        url:faker.image.image(),
        title:faker.random.words(),
        createdAt: new Date(),
        authorsIds:[],
        postsIds:[]
      })
    })

  }

  if (Posts.find().count() === 0) {

    const posts = emptyArray(_.random(0, 100)).forEach(item =>{

      Posts.insert({
        title:faker.lorem.words(),
        description:faker.lorem.lines(),
        authorsIds:[],
        linksIds:[],
        createdAt: new Date(),
      })

    })

  }





  Authors.find().fetch().forEach((Author)=>{
    let linksIds = []
    let postsIds = []

    if(!Author.linksIds.length) {
      _.sample(Links.find({},{fields:{_id:1}}).fetch(), _.random(0, 15))
        .map(item=>item._id)
        .forEach(_id => { linksIds.push(_id) })

        Authors.update(Author._id, {
          $set:{
            linksIds
          }
        })
    }

    if(!Author.postsIds.length) {
      _.sample(Posts.find({},{fields:{_id:1}}).fetch(), _.random(0, 15))
        .map(item=>item._id)
        .forEach(_id => { postsIds.push(_id) })

        Authors.update(Author._id, {
          $set:{
            postsIds
          }
        })
    }

    linksIds.forEach(linkId=>{
      let Link = Links.findOne(linkId)
      let authorsIds = _.union([...Link.authorsIds, Author._id])
      Links.update(linkId, {
        $set:{
          authorsIds
        }
      })
    })

    postsIds.forEach(postId=>{
      let Post = Posts.findOne(postId)
      let authorsIds = _.union([...Post.authorsIds, Author._id])
      Posts.update(postId, {
        $set:{
          authorsIds
        }
      })
    })

  })



  Links.find().fetch().forEach((Link)=>{
    let postsIds = []

    if(!Link.postsIds.length) {
      _.sample(Posts.find({},{fields:{_id:1}}).fetch(), _.random(0, 15))
        .map(item=>item._id)
        .forEach(_id => { postsIds.push(_id) })

      Links.update(Link._id, {
        $set:{
          postsIds
        }
      })

    }

    postsIds.forEach(postId=>{
      let Post = Posts.findOne(postId)
      let linksIds = _.union([...Post.linksIds, Link._id])
      Posts.update(postId, {
        $set:{
          linksIds
        }
      })
    })


  })


});
