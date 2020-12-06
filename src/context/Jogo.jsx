import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const JogoContext = createContext()

const JogoProvider = ({ children }) => {
  const [personagem1, setPersonagem1] = useState({})
  const [personagem2, setPersonagem2] = useState({})

  return (
    <JogoContext.Provider
      value={{
        personagem1,
        setPersonagem1,
        personagem2,
        setPersonagem2
      }}
    >
      {children}
    </JogoContext.Provider>
  )
}

JogoProvider.defaultProps = {
  children: <></>
}

JogoProvider.propTypes = {
  children: PropTypes.instanceOf(Array)
}

export default JogoProvider
