import React from 'react'
import './App.css'
import TituloPagina from './components/TituloPagina'
import CenarioBatalha from './components/CenarioBatalha'
import SelecaoPersonagem from './components/SelecaoPersonagem'
import JogoProvider from './context/Jogo'
function App () {
  return (
    <div className="App" >
      <JogoProvider>
        <TituloPagina title='Star Wars Selecione o Personagem' />
        <CenarioBatalha />
        <SelecaoPersonagem />
      </JogoProvider>
    </div>
  )
}

export default App
