import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http'
const GenerateSchema = require('generate-schema')


const Data = new Mongo.Collection('data');

var _jsonData = {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "romain",
        "last": "hoogmoed"
      },
      "location": {
        "street": "1861 jan pieterszoon coenstraat",
        "city": "maasdriel",
        "state": "zeeland",
        "postcode": 69217
      },
      "email": "romain.hoogmoed@example.com",
      "login": {
        "username": "lazyduck408",
        "password": "jokers",
        "salt": "UGtRFz4N",
        "md5": "6d83a8c084731ee73eb5f9398b923183",
        "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
        "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
      },
      "dob": "1983-07-14 07:29:45",
      "registered": "2010-09-24 02:10:42",
      "phone": "(656)-976-4980",
      "cell": "(065)-247-9303",
      "id": {
        "name": "BSN",
        "value": "04242023"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "NL"
    }

var jsonSchema = new JSONSchema(GenerateSchema.json('Data', _jsonData))

var simpleSchema = jsonSchema.toSimpleSchema();

Data.schema = new SimpleSchema(simpleSchema)

//
// Data.schema = new SimpleSchema({
//     "created":{
//         type: Date,
//         label: "Created",
//         defaultValue:new Date()
//     },
//     "title":{
//         type: String,
//         label: "Title",
//         optional:true
//     },
//     "description":{
//         type: String,
//         label: "Description",
//         optional:true
//     },
//     "type":{
//         type: String,
//         label: "Type",
//         allowedValues:[
//           'red',
//           'green',
//           'blue',
//           'orange'
//         ],
//         optional:true
//     },
//     "keywords":{
//       type: [Object],
//       label: "keywords",
//       defaultValue:[],
//       optional:true,
//     },
//     "keywords.$.name": {
//         type: String,
//         optional:true,
//         defaultValue:""
//     }
// });
//

if (Meteor.isServer) {

  // Data.before.upsert((userId, doc) => {
  //   console.log(doc)
  //   return Data.schema.clean(doc);
  // });

  Meteor.methods({
    removeAllData(){
      Data.remove({})
    },
    getData(){
      HTTP.get('https://randomuser.me/api?noinfo', (err, result)=>{
        console.log(result.data.results)
        Data.insert(result.data.results[0])
      })
    }
  })

  Meteor.publish("data", (query, search) => {
    if (search) {
      let regex = new RegExp(search, 'i');
      query = {
          ...query,
          $or: [{
            // title: regex
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
