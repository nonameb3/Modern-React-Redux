/* eslint-disable */
require('dotenv').config()
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Reducer from './reducers';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
 document.querySelector("#root"));
