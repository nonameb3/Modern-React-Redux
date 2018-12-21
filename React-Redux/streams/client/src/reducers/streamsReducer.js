import _ from 'lodash';
import * as Types from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type){
    case Types.LIST_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case Types.GET_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case Types.UPDATE_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case Types.CREATE_STREAM:
      return {...state, [action.payload.id]:action.payload};
    case Types.DELETE_STREAM:
      return _.omit(state,action.payload);
    default:
      return state;
  }
}