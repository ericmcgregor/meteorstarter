import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http'

const Data = new Mongo.Collection('data');


Data.schema = new SimpleSchema({
    "created":{
        type: Date,
        label: "Created",
        defaultValue:new Date()
    },
    "title":{
        type: String,
        label: "Title",
        optional:true
    },
    "description":{
        type: String,
        label: "Description",
        optional:true
    },
    "type":{
        type: String,
        label: "Type",
        allowedValues:[
          'red',
          'green',
          'blue',
          'orange'
        ],
        optional:true
    },
    "keywords":{
      type: [Object],
      label: "keywords",
      defaultValue:[],
      optional:true,
    },
    "keywords.$.name": {
        type: String,
        optional:true,
        defaultValue:""
    }
});


if (Meteor.isServer) {

  Data.before.upsert((userId, doc) => {
    console.log(doc)
    return Data.schema.clean(doc);
  });

  Meteor.methods({
    removeAllData(){
      Data.remove({})
    }
  })

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
