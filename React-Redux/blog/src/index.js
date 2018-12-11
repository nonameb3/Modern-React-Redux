import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import Reducer from './reducers';

ReactDOM.render(
		<Provider store={createStore(Reducer)}>
			<App/>
		</Provider>,
		document.querySelector('#root')
);
