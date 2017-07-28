import {HTTP} from 'meteor/http'
import { Links } from '/imports/api/links/links'

export function removeLink(_id) {
  return function (dispatch) {
    dispatch({type: "REMOVING_LINK"});
    
    Meteor.call('links.remove', _id);
    
  }
}
export function insertLink() {
  return function (dispatch) {
    dispatch({type: "INSERTING_LINK"});

    HTTP.get('https://randomname.de/?format=json&count=10&email=random ', (err, result)=>{
     
      Meteor.call('links.insert', {
        title:result.data[0].email,
        url:"http://url"
      }, (err, result)=>{
        dispatch({type: "INSERTING_LINK_SUCCESSFUL", payload:result.data})
      })
      
    })

  }
}