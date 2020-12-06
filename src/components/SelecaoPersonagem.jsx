import React, { useContext } from 'react'
import ListaSelecaoPersonagem from './ListaSelecaoPersonagem'
import PersonagemSelecionado from './PersonagemSelecionado/style'
import { JogoContext } from '../context/Jogo'
import randomIndex from '../utils/randomIndex'

import styled from 'styled-components'
// import { useContext } from 'react';

const ContainerRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const SelecaoPersonagem = () => {
  const { personagem1 } = useContext(JogoContext)

  return (
    <ContainerRow>
      <PersonagemSelecionado key={randomIndex()} img={personagem1} />
      <ListaSelecaoPersonagem />
      <PersonagemSelecionado key={randomIndex()} />
    </ContainerRow>
  )
}

export default SelecaoPersonagem
