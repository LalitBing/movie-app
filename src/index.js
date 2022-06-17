import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log('MIDDLEWARE:: ACTION_TYPE:', action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('MIDDLEWARE:: ACTION_TYPE:', action.type);
    next(action);
  };

const store = legacy_createStore(rootReducer, applyMiddleware(logger));
console.log(store);

// console.log(store.getState());
// console.log('Before State:', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'superman' }],
// });

// console.log('After State:', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App store={store} />);
