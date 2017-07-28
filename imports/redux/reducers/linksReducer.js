export default function reducer(state={
  updating:false,
}, action) {

    switch (action.type) {
      case "INSERTING_LINK": {
        return {...state, updating: true}
      }
      case "INSERTING_LINK_SUCCESSFUL": {
        return {...state, updating: false}
      }
    }

    return state
}
