import React, { Component } from "react";
import Doc from "../doc-component/doc-component";
import styles from "../doc-roadmap-papeis/styles.css";

export default class DocRoadmapPapeis extends Component {
  render() {
    return (
      <Doc
        className={styles.container}
        source="roadmap-papeis"
        title="Roadmap de Papeis"
      />
    );
  }
}
