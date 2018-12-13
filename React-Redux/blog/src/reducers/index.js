import {combineReducers} from 'redux';

export default combineReducers((state = null , action) =>{
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
});