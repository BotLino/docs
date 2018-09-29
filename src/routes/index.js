import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../components/HomePage'
import DocIndexPage from '../components/DocIndexPage'
import DocVisao from "../components/doc-visao/doc-visao";
import DocArq from "../components/doc-arquitetura/doc-arquitetura";
import DocTap from "../components/doc-tap/doc-tap";
import DocEap from "../components/doc-eap/doc-eap";
import DocEsc from "../components/doc-escopo/doc-escopo";
import DocCan from "../components/doc-canvas/doc-canvas"

export default () => (
    <BrowserRouter basename="/docs">
        <Switch>
            <Route path="/" exact render={props => <HomePage {...props} />} />
            <Route path="/all" exact render={props => <DocIndexPage {...props} />} />
            <Route path="/doc-visao" exact render={props => <DocVisao {...props} />} />
            <Route path="/doc-arquitetura" exact render={props => <DocArq {...props} />} />
            <Route path="/doc-tap" exact render={props => <DocTap {...props} />} />
            <Route path="/doc-eap" exact render={props => <DocEap {...props} />} />
            <Route path="/doc-escopo" exact render={props => <DocEsc {...props} />} />
            <Route path="/doc-canvas" exact render={props => <DocCan {...props} />} />
        </Switch>
    </BrowserRouter>
);
