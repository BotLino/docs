import React, { Component } from 'react'
import './jumbo-home.css'

const img1 = require('../../assets/images/lino.png')

export default class JumboHome extends Component {
  render() {
    return (
      <div className='jumbotron-home'>
        <div className='jumbo-title'>
            <img className='logo-img' src={img1} alt='Logo Lino' />
            <h1>Lino, o Bot da Universidade</h1>
        </div>
        <div className='jumbo-overlay' />
      </div>
    )
  }
}
