import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../components/HomePage'

export default () => (
    <BrowserRouter basename="/docs">
        <Switch>
            <Route path="/" exact render={props => <HomePage {...props} />} />
        </Switch>
    </BrowserRouter>
);