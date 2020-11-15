import React from 'react'

const terra = (<div style={{ background: 'red' }}>TERRA</div>)
const planeta2 = (<div style={{ background: 'blue' }}>planeta2</div>)

const planetas = { terra, planeta2 }

export const CenarioBatalha = ({ planetaSelecionado = 'planeta2' }) => {
  const style = {
    background: "url('https://i.pinimg.com/originals/37/d4/d5/37d4d5b0b422a7c90ed3144c83b0c870.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '250px'
  }
  return (
    <div style={style}>
      {planetas[planetaSelecionado]}
    </div>
  )
}

export default CenarioBatalha
