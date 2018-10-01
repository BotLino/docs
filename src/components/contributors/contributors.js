import React, { Component } from 'react'
import Cards from './cards';
import './contributors.css'

const contributors = [
    { 'source': 'brunosa.jpg', 'nome': 'Bruna Pinos'},
    { 'source': 'braga.jpeg', 'nome': 'Gabriel Braga'},
    { 'source': 'gabriel.jpg', 'nome': 'Gabriel Filipe'},
    { 'source': 'guiaugusto.jpg', 'nome': 'Guilherme Augusto'},
    { 'source': 'guila.jpeg', 'nome': 'Guilherme Lacerda'},
    { 'source': 'guilhesme.jpg', 'nome': 'Guilherme Marques'},
    { 'source': 'icaro.jpg', 'nome': 'Icaro Oliveira'},
    { 'source': 'leticia.jpeg', 'nome': 'Leticia de Souza'},
    { 'source': 'pedro.jpeg', 'nome': 'Pedro Rodrigues'},
    {'source': 'blanco.jpg', 'nome':'Matheus Blanco'}
]

export default class Contributors extends Component {
  render() {
    return (
      <div className='cards-contributors'>
        {
            contributors.map((val, key) => {
                return <Cards source={val.source} name={val.nome}/>
            })
        }
      </div>
    )
  }
}
