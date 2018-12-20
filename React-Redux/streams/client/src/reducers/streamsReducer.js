import * as Types from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type){
    case Types.GET_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case Types.UPDATE_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case Types.CREATE_STREAM:
      return {...state, [action.payload.id]:action.payload};
    default:
      return state;
  }
}