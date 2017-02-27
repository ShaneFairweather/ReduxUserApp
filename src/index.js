import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer_index';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/actions_types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token) {
    store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
