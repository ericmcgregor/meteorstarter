export function defaultMethod(_id) {
  return function (dispatch) {
    dispatch({type: "DEFAULT_METHOD"});
    Meteor.call('links.remove', _id);
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