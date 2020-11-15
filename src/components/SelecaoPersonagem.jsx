import React from 'react';
import ListaSelecaoPersonagem from './ListaSelecaoPersonagem'
import PersonagemSelecionado from './PersonagemSelecionado'

import styled from 'styled-components'
// import { useContext } from 'react';

const ContainerRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`

const SelecaoPersonagem = () => {
  return (
    <ContainerRow>
      <PersonagemSelecionado />
      <ListaSelecaoPersonagem />
      <PersonagemSelecionado />
    </ContainerRow>
  )
}

export default SelecaoPersonagem
