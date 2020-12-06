import styled from 'styled-components'

const PersonagemSelecionado = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export default PersonagemSelecionado
