import React, { Component } from 'react'
import './docs-list.css'


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
                    return <li key={j} className={`doc-index-item`}>
                        {content}
                    </li>;
                })}
            </ul>
        </li>
    )
});

export default class DocsList extends Component {
  render() {
    return (
        <div className="col s2 doc-navigation">
            <ul className="doc-index-list">{list}</ul>
        </div>
    )
  }
}
