export default function reducer(state={
  updating:false,
  default:{}
}, action) {
  
  switch (action.type) {
    case "DEFAULT_METHOD": {
      return {...state}
    }
    case "DEFAULT_ACTION": {
      return {...state}
    }
  }
  
  return state
}
