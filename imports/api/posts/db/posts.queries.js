import {Posts} from "../posts";

export const postsAll = Posts.createQuery('getposts', {
  // $filters:{
  //   $where:"this.linksCache.length > 2"
  // },
  title:1,
  description:1,
  createdAt:1,
  linksIds: 1,
  authorsIds: 1,
  linksData:{
    title: 1,
    url: 1,
    _id:1
  },
  authorsData:{
    _id:1,
    name:1,
    avatar:1
  },
});

