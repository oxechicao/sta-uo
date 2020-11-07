import React from 'react';
import ListaSelecaoPersonagem from './ListaSelecaoPersonagem'
import PersonagemSelecionado from './PersonagemSelecionado'

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'justify-around'
    }
}

const SelecaoPersonagem = () => {
    return (
        <div style={styles.row}>
            <PersonagemSelecionado />
            <ListaSelecaoPersonagem />
            <PersonagemSelecionado />
        </div>
    )
}

export default SelecaoPersonagem