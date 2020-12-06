import React, { useContext, useCallback, useState } from 'react'
import { BotaoPersonagem } from './BotaoPersonagem/style'
import { JogoContext } from '../context/Jogo'
import randomIndex from '../utils/randomIndex'
import styled from 'styled-components'

const lightSide = [
  {
    name: 'Luke Skywalker',
    img: 'https://i.pinimg.com/originals/40/d6/1d/40d61dde8f4aced9ecd96269b5050ebe.jpg',
    side: 'light'
  },
  {
    name: 'Chewbacca',
    img: 'https://i.pinimg.com/originals/4a/6f/40/4a6f40b0c856d07ff7767e35e85f71ac.png',
    side: 'light'
  },
  {
    name: 'Han Solo',
    img: 'https://i.pinimg.com/originals/ea/79/48/ea794803db84ae3732c3fb1d9be8c500.jpg',
    side: 'light'
  }
]

const darkSide = [
  {
    name: 'Dart Vader',
    img: 'https://i.pinimg.com/564x/05/fb/bd/05fbbdcd029134f703d3bd905b42af09.jpg',
    side: 'dark'
  },
  {
    name: 'Kylo Ren',
    img: 'https://i.pinimg.com/originals/96/d2/f8/96d2f89c2d1a01fa1cde94a985fbc33f.png',
    side: 'dark'
  },
  {
    name: 'Storm Troppe',
    img: 'https://i.pinimg.com/originals/09/b3/8b/09b38b6dd73a696331f6b93a6f1c0e79.jpg',
    side: 'dark'
  }
]

const CaracterGroup = styled.div`
    display: flex;
    flex-direction: column;
`

const SideGroup = styled.div`
    display: flex;
    flex-direction: row;
`

const ListaSelecaoPersonagem = () => {
  const { setPersonagem1 } = useContext(JogoContext)

  const [personagemSelecionado, setPersonagemSelecionado] = useState(false)
  const [selecionado1, setSelecionado1] = useState('')

  const handlePersonagem = (img) => {
    setPersonagem1(img)
  }

  const handleLeave = () => {
    setPersonagem1(personagemSelecionado ? selecionado1 : '')
  }

  const handleOnClickPersonagem = (img) => {
    setPersonagemSelecionado(true)
    setSelecionado1(img)
    setPersonagem1(img)
  }

  return (
      <>
          <CaracterGroup
            onMouseLeave={() => {
              handleLeave()
            }}
          >
              <SideGroup>
                  {lightSide.map((item) => (
                    <BotaoPersonagem
                      key={randomIndex()}
                      img={item.img}
                      onMouseOver={() => {
                        handlePersonagem(item.img)
                      }}
                      onClick={() => {
                        handleOnClickPersonagem(item.img)
                      }}
                    />
                  ))}
              </SideGroup>
              <SideGroup>
                  {darkSide.map((item) => (
                    <BotaoPersonagem
                      key={randomIndex()}
                      img={item.img}
                      onMouseOver={() => {
                        handlePersonagem(item.img)
                      }}
                      onClick={() => {
                        handleOnClickPersonagem(item.img)
                      }}
                    />
                  ))}
              </SideGroup>
          </CaracterGroup>
      </>
  )
}

export default ListaSelecaoPersonagem
