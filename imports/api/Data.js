import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http'

const Data = new Mongo.Collection('data');

if (Meteor.isServer) {

  Meteor.publish("data", (query, search) => {
    if (search) {
      let regex = new RegExp(search, 'i');
      query = {
          ...query,
          $or: [{
            title: regex
          }, ]
      }
    }

    return Data.find(query, {
          sort: {
              '_id': -1
          }
      })
  });

}

export default Data;
