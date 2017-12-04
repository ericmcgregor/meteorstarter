import {Posts} from "../posts";
import Meteor from 'meteor/meteor'

Posts.addLinks({
    'link': {
        type: 'one',
        collection: 'links',
        field: 'linkId',
        index: true,
        autoremove: true,
        denormalize: {
            body: {
                title: 1,
            },
            field: 'linkCache',
        }
    }
})