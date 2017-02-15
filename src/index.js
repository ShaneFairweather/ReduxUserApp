import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer_index';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
