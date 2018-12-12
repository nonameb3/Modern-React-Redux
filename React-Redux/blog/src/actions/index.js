import Api from '../apis/jsonPlanceholder';

// Use MiddleWare for redux action
export const fecthPost = () => async dispatch =>{
  const respones = await Api.get('/posts');

  return dispatch({
    type: 'Middleware',
    payload: respones
  });
};