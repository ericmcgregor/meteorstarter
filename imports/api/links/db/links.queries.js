import {Links} from "../links";

export const linksAll = Links.createQuery('getLinks', {
  url:1,
  title:1,
  createdAt:1,
  postsIds:1,
  authorsIds:1,
  postsData: {
    title: 1,
    url: 1,
    _id:1
  },
  authorsData: {
    name: 1,
    avatar: 1,
    _id:1
  }
});
