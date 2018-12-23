import * as Types from './types';
import steams from '../apis/streams';
import history from '../history';

// Sign In action
export const SignIn = userId => {
  return {
    type: Types.SIGN_IN,
    payload: userId
  };
};

// Sign Out action
export const SignOut = () => {
  return {
    type: Types.SIGN_OUT
  };
};

// API POST action
export const createStream = formValue => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const respone = await steams.post('/streams', {...formValue, userId});

  dispatch({
    type: Types.CREATE_STREAM,
    payload: respone.data
  })

  history.push('/');
};

// API GET List action
export const listStreams = () => async dispatch => {
  const respone = await steams.get('/streams');

  dispatch({
    type: Types.LIST_STREAMS,
    payload: respone.data
  })
};

// API GET action
export const getStream = id => async dispatch => {
  const respone = await steams.get(`/streams/${id}`);

  dispatch({
    type: Types.GET_STREAM,
    payload: respone.data
  })
};

// API PATCH action
export const editStream = (id, formValue) => async dispatch => {
  // update all properties
  // const respone = await steams.put(`/streams/${id}`, formValue);

  // update some properties
  const respone = await steams.patch(`/streams/${id}`, formValue);

  dispatch({
    type: Types.UPDATE_STREAM,
    payload: respone.data
  })

  history.push('/');
};

// API DELETE action
export const deleteStream = id => async dispatch => {
  await steams.delete(`/streams/${id}`);

  dispatch({
    type: Types.UPDATE_STREAM,
    payload: id
  })
};