import React from 'react'
import './App.css'
import TituloPagina from './components/TituloPagina'
import CenarioBatalha from './components/CenarioBatalha'
import SelecaoPersonagem from './components/SelecaoPersonagem'

function App () {
  return (
    <div className="App" >
      <TituloPagina title='Star Wars Selecione o Personagem' />
      <CenarioBatalha />
      <SelecaoPersonagem />
    </div>
  )
}

export default App
