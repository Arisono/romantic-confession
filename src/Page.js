import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import SpecialEffects from "./components/confession/SpecialEffects";
import CountTimeDown from "./components/common/CountTimeDown";

export  default ()=>(
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/special-effects" push />} />
            <Route path="/app" component={App} />
            <Route path="/special-effects" component={SpecialEffects}/>
            <Route path="/times" component={CountTimeDown}/>
        </Switch>
    </Router>
)