import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home';
import Account from './components/account';
import Blog from './components/blog';
import Signin from './components/signin';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signin" component={Signin} />
        <Route path="settings" component={Account} />
        <Route path="Blog" component={Blog} />
        <Route path="account" component={Account} />
    </Route>
);