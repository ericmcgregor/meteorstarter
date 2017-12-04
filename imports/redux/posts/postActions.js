import { registerReactiveSource } from 'meteor-redux-middlewares';
import { startSubscription } from 'meteor-redux-middlewares';
import {postsAll} from "/imports/api/posts/db/posts.queries";

export const POSTS_ALL_SUBSCRIPTION_READY = 'QUERY_GETPOSTS_SUBSCRIPTION_READY';
export const POSTS_ALL_SUBSCRIPTION_CHANGED = 'QUERY_GETPOSTS_SUBSCRIPTION_CHANGED';
export const POSTS_SUB = 'query.getposts';

export const loadPosts = () =>
    startSubscription({
        key: POSTS_SUB,
        get: () => postsAll.fetch(),
        subscribe: () => postsAll.subscribe(),
    });