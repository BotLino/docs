import React, { Component } from 'react'
import Cards from './cards';
import './contributors.css'

const contributors = [
    {'source': 'brunosa.jpg'},
    {'source': 'braga.jpeg'},
    {'source': 'gabriel.jpg'},
    {'source': 'guiaugusto.jpg'},
    {'source': 'guila.jpeg'},
    {'source': 'guilhesme.jpg'},
    {'source': 'icaro.jpg'},
    {'source': 'leticia.jpeg'},
    {'source': 'pedro.jpeg'},
    {'source': 'blanco.jpg'}
]

export default class Contributors extends Component {
  render() {
    return (
      <div className='cards-contributors'>
        {
            contributors.map((val, key) => {
                return <Cards source={val.source} />
            })
        }
      </div>
    )
  }
}
