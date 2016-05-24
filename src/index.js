import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
// src/routes.js
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
     promise
)(createStore);

/* 
     follow src/routes.js to find external routes 
     ^ aka routes={routes}
*/
ReactDOM.render(
     <Provider store={createStoreWithMiddleware(reducers)}>
          <Router history={browserHistory} routes={routes} />
     </Provider>
     , document.querySelector('.container'));
