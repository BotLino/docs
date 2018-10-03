import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./docs-list.css";

const docs = [
  {
    title: "Produto",
    contents: [
      {
        name: "TAP",
        link: "/doc-tap"
      },
      {
        name: "EAP",
        link: "/doc-eap"
      },
      {
        name: "Escopo do Projeto",
        link: "/doc-escopo"
      },
      {
        name: "Canvas do Projeto",
        link: "/doc-canvas"
      },
      {
        name: "Personalidade do Bot",
        link: "/doc-personalidade-do-bot"
      },
      {
        name: "Identidade Visual",
        link: "/doc-identidade-visual"
      }
    ]
  },
  {
    title: "Elicitação",
    contents: [
      {
        name: "Entrevistas",
        link: "/doc-interviews"
      },
      {
        name: "Backlog",
        link: "/doc-backlog"
      },
      {
        name: "NFR",
        link: "/doc-nfr"
      }
    ]
  },
  {
    title: "Projeto",
    contents: [
      {
        name: "Plano Metodológico",
        link: "/doc-plano-metodologico"
      },
      {
        name: "Documento de Visão",
        link: "/doc-visao"
      },
      {
        name: "Documento de Arquitetura",
        link: "/doc-arquitetura"
      },
      {
        name: "Plano de Comunicação",
        link: "/doc-plano-comunicacao"
      },
      {
        name: "EVM",
        link: "/doc-evm"
      }
    ]
  },
  {
    title: "Roadmap",
    contents: [
      {
        name: "Roadmap Geral",
        link: "/doc-roadmap"
      },
      {
        name: "Roadmap dos Papéis",
        link: "/doc-roadmap-papeis"
      }
    ]
  }
];
const list = docs.map((val, i) => {
  return (
    <li key={i} className="doc-title">
      {val.title}
      <ul className="doc-index">
        {val.contents.map((content, j) => {
          return (
            <li key={j} className={`doc-index-item`}>
              <Link to={content.link}>{content.name}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
});

export default class DocsList extends Component {
  render() {
    return (
      <div className="col s2 doc-navigation">
        <ul className="doc-index-list">{list}</ul>
      </div>
    );
  }
}
