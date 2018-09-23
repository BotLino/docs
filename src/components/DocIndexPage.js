import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import Markdown from './markdown/Markdown'
import "./DocIndexPage.css";

export default class DocIndexPage extends Component {
  render() {
    const docs = [
      { title: "Abertura", contents: ["TAP", "EAP", "Visão Geral do Produto"] },
      {
        title: "Projeto",
        contents: [
          "Plano Metodológico",
          "Documento de Visão",
          "Documento de Arquitetura"
        ]
      },
      { title: "Roadmap", contents: ["Roadmap Geral", "Roadmap dos Papéis"] }
    ];
    const list = docs.map((val, i) => {
      return (
      <li key={i} className="doc-title">
          {val.title}
        <ul className="doc-index">
          {val.contents.map((content, j) => {
            return(
              <li key={j} className='doc-index-item'>{content}</li>
            )
          })}
        </ul>
      </li>
      )
    });
    return (
      <div className="doc-list">
        <Navbar active={true} />
        <div className="row">
          <div className="col s3 doc-navigation">
            <ul className="doc-index">{list}</ul>
          </div>
          <div className="col s9 push-s3 doc-content container">
            <h3 className='center aligned'>Documento de Visão</h3>
            <Markdown file='documento-de-visao' />
          </div>
        </div>
      </div>
    );
  }
}
