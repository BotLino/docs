import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import DocIndexPage from "../components/DocIndexPage";
import DocVisao from "../components/doc-visao/doc-visao";
import DocArq from "../components/doc-arquitetura/doc-arquitetura";
import DocTap from "../components/doc-tap/doc-tap";
import DocEap from "../components/doc-eap/doc-eap";
import DocEsc from "../components/doc-escopo/doc-escopo";
import DocCan from "../components/doc-canvas/doc-canvas";
import DocRoadmap from "../components/doc-roadmap-geral/doc-roadmap-geral";
import DocEntrevistas from "../components/doc-entrevistas/doc-entrevistas";
import DocRoadmapPapeis from "../components/doc-roadmap-papeis/doc-roadmap-papeis";
import DocPlanoMetodologico from "../components/doc-plano-metodologico/doc-plano-metodologico";
import DocBacklog from "../components/doc-backlog/doc-backlog";
import DocNfr from "../components/doc-nfr/doc-nfr";
import DocPersonalidadeDoBot from "../components/doc-personalidade-do-bot/personalidade-do-bot";
import DocIdentidadeVisual from "../components/doc-identidade-visual/doc-identidade-visual";
import DocPlanoComunicacao from "../components/doc-plano-comunicacao/doc-plano-comunicacao";
import DocEvm from "../components/doc-evm/doc-evm";
import DocQuadroConhecimentos from "../components/doc-quadro-conhecimentos/doc-quadro-conhecimentos";
import DocQualidade from "../components/doc-qualidade/doc-qualidade";
import DocPraticasAgeis from "../components/doc-praticas-ageis/doc-praticas-ageis";
import DocGitFlow from "../components/doc-gitflow/doc-gitflow";
import DocShowMeTheCode from "../components/doc-show-me-the-code/doc-show-me-the-code";
import DocPrivacy from "../components/doc-privacy/doc-privacy";

export default () => (
  <BrowserRouter basename="/docs">
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/all" exact render={props => <DocIndexPage {...props} />} />
      <Route
        path="/doc-visao"
        exact
        render={props => <DocVisao {...props} />}
      />
      <Route
        path="/doc-arquitetura"
        exact
        render={props => <DocArq {...props} />}
      />
      <Route
        path="/doc-qualidade"
        exact
        render={props => <DocQualidade {...props} />}
      />
      <Route path="/doc-tap" exact render={props => <DocTap {...props} />} />
      <Route path="/doc-eap" exact render={props => <DocEap {...props} />} />
      <Route path="/doc-escopo" exact render={props => <DocEsc {...props} />} />
      <Route path="/doc-canvas" exact render={props => <DocCan {...props} />} />
      <Route
        path="/doc-roadmap"
        exact
        render={props => <DocRoadmap {...props} />}
      />
      <Route
        path="/doc-interviews"
        exact
        render={props => <DocEntrevistas {...props} />}
      />
      <Route
        path="/doc-roadmap-papeis"
        exact
        render={props => <DocRoadmapPapeis {...props} />}
      />
      <Route
        path="/doc-plano-metodologico"
        exact
        render={props => <DocPlanoMetodologico {...props} />}
      />
      <Route
        path="/doc-backlog"
        exact
        render={props => <DocBacklog {...props} />}
      />
      <Route
        path="/doc-personalidade-do-bot"
        exact
        render={props => <DocPersonalidadeDoBot {...props} />}
      />
      <Route path="/doc-nfr" exact render={props => <DocNfr {...props} />} />
      <Route
        path="/doc-identidade-visual"
        exact
        render={props => <DocIdentidadeVisual {...props} />}
      />
      <Route
        path="/doc-plano-comunicacao"
        exact
        render={props => <DocPlanoComunicacao {...props} />}
      />
      <Route path="/doc-evm" exact render={props => <DocEvm {...props} />} />
      <Route
        path="/doc-quadro-de-conhecimentos"
        exact
        render={props => <DocQuadroConhecimentos {...props} />}
      />
      <Route
        path="/doc-praticas-ageis"
        exact
        render={props => <DocPraticasAgeis {...props} />}
      />
      <Route
        path="/doc-gitflow"
        exact
        render={props => <DocGitFlow {...props} />}
      />
      <Route
        path="/doc-show-me-the-code"
        exact
        render={props => <DocShowMeTheCode {...props} />}
      />
      <Route
        path="/privacy.html"
        exact
        render={props => <DocPrivacy {...props} />}
      />
    </Switch>
  </BrowserRouter>
);
