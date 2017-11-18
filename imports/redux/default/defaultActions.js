
export function getDefaultList(_id) {
  return function (dispatch) {
    dispatch({type: "GET_DEFAULT_LIST"});
    Meteor.call('links.get', (err, response)=>{
      dispatch({type:'SUCCESS_GET_DEFAULT_LIST', payload:response})
    });
  }
}
export function defaultAction() {
  return {
    type: "DEFAULT_ACTION",
    payload: {
      name: "Will",
      age: 35,
    }
  }
}