import { SIGN_IN, SIGN_OUT } from './types';

// Sign In action
export const SignIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

// Sign Out action
export const SignOut = () => {
  return {
    type: SIGN_OUT
  };
};