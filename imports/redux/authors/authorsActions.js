import { registerReactiveSource } from 'meteor-redux-middlewares';
import { startSubscription } from 'meteor-redux-middlewares';
import {authorsAll} from "/imports/api/authors/db/authors.queries";

export const AUTHORS_ALL_SUBSCRIPTION_READY = 'QUERY_GETAUTHORS_SUBSCRIPTION_READY';
export const AUTHORS_ALL_SUBSCRIPTION_CHANGED = 'QUERY_GETAUTHORS_SUBSCRIPTION_CHANGED';
export const AUTHORS_SUB = 'query.getAuthors';

export const loadAuthors = () =>
    startSubscription({
        key: AUTHORS_SUB,
        get: () => authorsAll.fetch(),
        subscribe: () => authorsAll.subscribe(),
    });
