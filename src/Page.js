import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import SpecialEffects from "./components/confession/SpecialEffects";
import CountTimeDown from "./components/common/CountTimeDown";
import RomanticFlowers from "./components/confession/RomanticFlowers";
import LoveTimes from "./components/confession/LoveTimes";
import HeaderPage from "./components/home/HeaderPage";
import HomePage from "./components/home/HomePage";

export  default ()=>(
    <Router>
        <Switch>
            {/*render={() => <Redirect to="/special-effects" push />}*/}
            <Route exact path="/"  component={HomePage}/>
            <Route path="/love" component={HomePage} />



        </Switch>
    </Router>
)