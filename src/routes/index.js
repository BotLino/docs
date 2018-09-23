import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../components/HomePage'
import DocIndexPage from '../components/DocIndexPage'

export default () => (
    <BrowserRouter basename="/docs">
        <Switch>
            <Route path="/" exact render={props => <HomePage {...props} />} />
            <Route path="/all" exact render={props => <DocIndexPage {...props} />} />
        </Switch>
    </BrowserRouter>
);