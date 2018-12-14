import Api from '../apis/jsonPlanceholder';

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