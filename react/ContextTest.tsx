import React, { useReducer } from 'react'

// https://kentcdodds.com/blog/how-to-use-react-context-effectively

interface CountReducer {
  count: number
}

const reducer = (state: CountReducer, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const ContextTest: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }


  return (
    <section className='w-100 vh-50 flex items-center justify-center'>
      <button className='ma3' onClick={decrement}> - </button>
      <span className='ma3'>{state.count}</span>
      <button className='ma3' onClick={increment}> + </button>
    </section>
  )
}



export default ContextTest
