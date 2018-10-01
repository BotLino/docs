import React, { Component } from 'react'
import './cards.css'

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="card-sobre">
            <img 
                src={require(`../../assets/images/${this.props.source}`)}
                alt="FotoMembro"
                className="image"
            />

            {/* <div className="overlay">
              <div className="background" />
              <div className="flow-text " id="Nome">
                {this.props.name}
              </div>

              <div className="flow-text " id="Cargo">
                {this.props.title}
              </div>

              <div className="flow-text" id="TextoCard">
                {this.props.text}
              </div>
            </div> */}
          </div>;

    }


}
