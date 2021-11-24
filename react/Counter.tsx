import React, { useContext } from 'react'
import { CountContext } from './contexts/CountContext';

const Counter = () => {
  const { state, dispatch } = useContext(CountContext);

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  console.log("state", state)

  return (
    <section className='w-100 vh-50 flex items-center justify-center'>
      <button className='ma3' onClick={decrement}> - </button>
      <span className='ma3'>{state.count}</span>
      <button className='ma3' onClick={increment}> + </button>
    </section>
  )
}

export default Counter
