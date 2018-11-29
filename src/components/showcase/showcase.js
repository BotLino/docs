import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./showcase.css";

const show = require("../../assets/images/telegram.gif");
const show2 = require("../../assets/images/facebook.gif");

export default class Showcase extends Component {
  render() {
    return (
    <div>
        <div className="row showcase-section container">
          <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10}>
          <div className="col s6 showcase-caption">
              <div className="showcase-title">
                  Ta com fome? Vamos ver o que tem no Restaurante!
              </div>
              <div className="showcase-text">
                  Quando estiver com fome e naquela dúvida se come no RU, basta
                  falar comigo! Eu pesquiso qual será o cardápio de hoje e te
                  envio com o maior prazer ;{")"}
              </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>
            <img className="col s4 push-s2 showcase-img" src={show} />
        </ScrollAnimation>
      </div>
      <div className="row showcase-section container">
          <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10}>
          <div className="col s6 showcase-caption">
              <div className="showcase-title">
                  Quer saber sobre documentações? Eu te ajudo!
              </div>
              <div className="showcase-text">
                   Período de matrícula e como tirar documentações como declarações de matrícula, 
                   são coisas que eu posso te falar!
                   ;{")"}
              </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>
            <img className="col s4 push-s2 showcase-img" src={show2} />
        </ScrollAnimation>
      </div>
    </div>
    );
  }
}
