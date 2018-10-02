import React, { Component } from "react";
import "./DocIndexPage.css";
import DocVisao from "./doc-visao/doc-visao";

export default class DocIndexPage extends Component {
  render() {
    return (
      <div>
        <DocVisao />
      </div>
    );
    // <div className="doc-list">
    //   <Navbar active={true} />
    //   <div className="row">
    //     <DocList />
    //     <div className="col s9 push-s2 doc-content container">
    //       <h3 className='center aligned'>Documentos</h3>
    //     </div>
    //   </div>
    // </div>
  }
}
