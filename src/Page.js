import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import SpecialEffects from "./components/confession/SpecialEffects";
import CountTimeDown from "./components/common/CountTimeDown";
import RomanticFlowers from "./components/confession/RomanticFlowers";
import LoveTimes from "./components/confession/LoveTimes";

export  default ()=>(
    <Router>
        <Switch>
            {/*render={() => <Redirect to="/special-effects" push />}*/}
            <Route exact path="/"  component={LoveTimes}/>
            <Route path="/app" component={App} />
            <Route path="/2020-02-14.html" component={SpecialEffects}/>
            <Route path="/times" component={LoveTimes}/>

        </Switch>
    </Router>
)