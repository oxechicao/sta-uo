import styled, { css } from 'styled-components'

export const BotaoPersonagem = styled.button`
    width: 60px;
    height: 120px;
    ${props => css`
        background: url('${props.img}');
    `}
`