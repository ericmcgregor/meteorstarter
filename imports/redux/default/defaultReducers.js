export default function reducer(state={
  fetching:false,
  ready:false,
  list:[]
}, action) {
  
  switch (action.type) {
    case "GET_DEFAULT_LIST": {
      console.log(action.payload)
      return {
        ...state,
        fetching:true
      }
    }
    case "SUCCESS_GET_DEFAULT_LIST": {
      return {
        ...state,
        list:action.payload,
        fetching:false,
        ready:true
      }
    }
  }
  
  return state
}
