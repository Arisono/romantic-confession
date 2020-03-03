import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';

export  default ()=>(
    <Router>
        <Switch>
            <Route path="/app" component={App} />
        </Switch>
    </Router>
)