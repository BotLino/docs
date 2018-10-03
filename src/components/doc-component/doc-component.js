import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import DocsList from "../docs-list/docs-list";
import Markdown from "../markdown/Markdown";
import "./doc-component.css";

export default class Doc extends Component {
  render() {
    const source = this.props.source;
    let title = this.props.title;
    let content;
    if (source) {
      content = (
        <div>
          <h3 className="center aligned">{title}</h3>
          <Markdown file={source} />
        </div>
      );
    } else {
      content = <h3 className="center aligned">Documentos</h3>;
    }
    return (
      <div className="doc-list">
        <Navbar active={true} />
        <div className="row">
          <DocsList />
          <div className="col s9 push-s2 doc-content container">{content}</div>
        </div>
      </div>
    );
  }
}
