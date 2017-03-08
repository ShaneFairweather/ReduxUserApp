import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home';
import Account from './components/account';
import Blog from './components/blog';
import Signin from './components/signin';
import Signout from './components/signout';
import Register from './components/register';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Register} />
        {/*<Route path="settings" component={Account} />*/}
        <Route path="Blog" component={Blog} />
        <Route path="account" component={Account} />
    </Route>
);