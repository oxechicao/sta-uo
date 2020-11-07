import React from 'react'
import PersonagemSelecionar from './PersonagemSelecionar'

const style = {
  lista: {

  }
}

const personagem = [
    {
        name: 'Luke Skywalker',
        img: 'https://i.pinimg.com/originals/40/d6/1d/40d61dde8f4aced9ecd96269b5050ebe.jpg'
    }
];

const ListaSelecaoPersonagem = () => {
    return (
        <>
            <PersonagemSelecionar
                name={personagem[0].name} 
                img={personagem[0].img} 
            />
        </>
    )
}

export default ListaSelecaoPersonagem
