import { FETCH_ID } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ID:
      return {
        ...state,
        items: action.payload
      }
      
    //   break;
  
    default:
      return state;
  }
}