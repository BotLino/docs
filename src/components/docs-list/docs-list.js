import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './docs-list.css'


const docs = [
    { title: "Abertura", contents: [
        { name: "TAP", link: "/doc-tap" },
        { name: "EAP", link: "#" },
        {name: "Visão Geral do Produto", link: "#"}
    ]},
    {
        title: "Projeto",
        contents: [
            { name: "Plano Metodológico", link: "#" },
            { name: "Documento de Visão", link: "/doc-visao" },
            { name: "Documento de Arquitetura", link: "/doc-arquitetura" }
        ]
    },
    { title: "Roadmap", contents: [
        { name: "Roadmap Geral", link: "#" },
        { name: "Roadmap dos Papéis", link: "#" }
    ]}
];
const list = docs.map((val, i) => {
    return (
        <li key={i} className="doc-title">
            {val.title}
            <ul className="doc-index">
                {val.contents.map((content, j) => {
                    return <li key={j} className={`doc-index-item`}>
                        <Link to={content.link}>{content.name}</Link>
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
