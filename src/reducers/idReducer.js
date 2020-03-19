import { FETCH_ID } from '../actions/types';

const initialState = {
  item: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ID:
      return ({
        ...state,
        item: action.payload
      })  
    default:
      return state;
  }
}