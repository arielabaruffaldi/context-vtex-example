import React from 'react'
import { CountProvider } from './contexts/CountContext'
import Counter from './Counter'

const ContextTest: React.FunctionComponent = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  )
}

export default ContextTest
