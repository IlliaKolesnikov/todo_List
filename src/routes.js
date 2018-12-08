import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import List from './components/List';


const Routes = () => (
    <Switch>
        <Route path='/home' component={List} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Redirect path="/" to="/signin" />
    </Switch>
);

export default Routes;
