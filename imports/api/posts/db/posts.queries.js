import {Posts} from "../posts";

export const postsAll = Posts.createQuery('getposts', {
    title: 1,
    description:1,
    createdAt:1,
    link:{
        title:1,
        url:1
    }
});

