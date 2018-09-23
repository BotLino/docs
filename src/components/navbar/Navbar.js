import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const img = require('../../assets/images/lino.png')

class Navbar extends Component {

  render() {
    let { active } = this.props
    return <div id="nav-container" className='navbar-fixed'>
      <nav className={active ? 'active' : ''}>
          <div className="nav-wrapper container-fluid">
            <a href="./" className="brand-logo">
              <img src={img} alt="Logo Lino" className="responsive-img thumb" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
              <li>
                <Link to='/all'>Documentos</Link>
              </li>
              <li>
                <a href="#">Contribuidores</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>;
  }
}

export default Navbar;
