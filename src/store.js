import { createStore } from 'redux';

const initialState = {
  loggedIn: false,
  login: ''
};

function credentials(state = initialState, action) {
  if (action.type === 'sign in') {
    if (action.payload.login === 'developer21' && action.payload.password === '123456') {
      return {
        loggedIn: true,
        login: action.payload.login
      };
    } else {
      return {
        ...state,
        loggedIn: false
      };
    }
  }
  return state;
}

export const store = createStore(credentials);
