import React, { Component } from "react";
import './navbar.css'

const img = require('../../assets/images/lino.png')

class Navbar extends Component {

  render() {
    return <div id="nav-container">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img src={img} alt="Logo Lino" className="responsive-img thumb" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>;
  }
}

export default Navbar;
