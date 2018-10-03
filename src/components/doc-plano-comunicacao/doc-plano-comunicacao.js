import React, { Component } from "react";
import Doc from "../doc-component/doc-component";
import styles from "../doc-plano-comunicacao/styles.css";

export default class DocPlanoComunicacao extends Component {
  render() {
    return (
      <Doc
        className={styles.container}
        source="comunicacao"
        title="Plano de Comunicação"
      />
    );
  }
}
