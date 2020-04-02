import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import postsReducer from './reducers/postsReducer';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  posts: postsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <div className="thin-container">
          <Switch>
            <Route path="/" exact component={PostsIndex} />
          </Switch>
        </div>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
