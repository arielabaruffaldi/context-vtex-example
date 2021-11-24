import React, { useState } from 'react'



// https://kentcdodds.com/blog/how-to-use-react-context-effectively


const ContextTest: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <section className='w-100 vh-50 flex items-center justify-center'>
      <button className='ma3' onClick={decrement}> - </button>
      <span className='ma3'>{count}</span>
      <button className='ma3' onClick={increment}> + </button>
    </section>
  )
}



export default ContextTest
