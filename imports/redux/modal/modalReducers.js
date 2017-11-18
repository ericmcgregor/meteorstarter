const defaultState = {
  open:false,
  size:"lg",
  modalComponent:null
}
export default function reducer(state={
  ...defaultState
}, action) {
  
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        ...action.payload,
      }
    }
    case "CLOSE_MODAL":{
     return {
       ...defaultState
      }
    }
  }
  
  return state
}
