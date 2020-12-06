import styled, { css } from 'styled-components'

export const BotaoPersonagem = styled.button`
    width: 100px;
    margin: 5px;
    height: 120px;
    background-size: cover;
    ${props => css`
        background-image: url(${props.img});
    `}
`
