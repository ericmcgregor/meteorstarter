import {Authors} from "../authors";

export const authorsAll = Authors.createQuery('getAuthors', {
  "name": 1,
  "username": 1,
  "avatar": 1,
  "email": 1,
  "dob": 1,
  "phone": 1,
  "address": 1,
  "website": 1,
  "company": 1,
  linksIds:1,
  postsIds:1,
  linksData: {
    title: 1,
    url: 1,
    _id:1
  },
  postsData: {
    title: 1,
    description: 1,
    _id:1
  }
});
