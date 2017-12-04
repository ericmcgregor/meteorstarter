import {Links} from "../links";

export const linksAll = Links.createQuery({
    title: 1,
    url:1,
    createdAt:1,
    posts:{
        title:1
    }
});


Meteor.methods({
    linksAll() {
        const query = linksAll.clone()

        return query.fetch();
    }
})