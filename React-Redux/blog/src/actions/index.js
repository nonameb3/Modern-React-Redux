import Api from '../apis/jsonPlanceholder';
import _ from 'lodash';

// Use MiddleWare for redux action
export const fecthPost = () => async dispatch =>{
  const respones = await Api.get('/posts');
  return dispatch({
    type: 'FETCH_POSTS',
    payload: respones.data
  });
};

export const fecthUser = (id) => async dispatch =>{
  const respones = await Api.get(`/users/${id}`);
  return dispatch({
    type: 'FETCH_USERS',
    payload: respones.data
  });
}

export const fecthPostAndUser = () => async (dispatch, getState) =>{
  await dispatch(fecthPost());
  // const userId =_.uniq(_.map(getState().posts,'userId'));
  // userId.forEach(Id => dispatch(fecthUser(Id)));

  // use lodash helper
  _.chain(getState().posts).map('userId').uniq().forEach(id => dispatch(fecthUser(id))).value();
}

// Use lodash fix call api many time
//=====================================================
// export const fecthUser = id => dispatch =>{
//   memoizeUser(id,dispatch);
// }

// const memoizeUser = _.memoize(async(id, dispatch) => {
//   const respones = await Api.get(`/users/${id}`);
//   return dispatch({
//     type: 'FETCH_USERS',
//     payload: respones.data
//   });
// });
// //=====================================================