import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import './DocIndexPage.css'

export default class DocIndexPage extends Component {
  render() {
    return (
      <div className='doc-list'>
        <Navbar active={true} />
      </div>
    )
  }
}
