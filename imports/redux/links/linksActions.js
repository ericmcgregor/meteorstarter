import { registerReactiveSource } from 'meteor-redux-middlewares';
import { startSubscription } from 'meteor-redux-middlewares';
import {linksAll} from "/imports/api/links/db/links.queries";

export const LINKS_ALL_SUBSCRIPTION_READY = 'QUERY_GETLINKS_SUBSCRIPTION_READY';
export const LINKS_ALL_SUBSCRIPTION_CHANGED = 'QUERY_GETLINKS_SUBSCRIPTION_CHANGED';
export const LINKS_SUB = 'query.getLinks';

export const loadLinks = () =>
    startSubscription({
        key: LINKS_SUB,
        get: () => linksAll.fetch(),
        subscribe: () => linksAll.subscribe(),
    });
