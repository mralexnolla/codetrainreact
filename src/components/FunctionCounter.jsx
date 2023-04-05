import React from 'react'
import { useState } from 'react'

const FunctionCounter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h3>Excersie 2 </h3>
        <h3>Funtional component </h3>
        <h1>FuncCount: {count}</h1>
        <button onClick={e => setCount(count + 1)}>Increment</button> &nbsp;
        <button onClick={e => setCount(count - 1)}>Drcrement</button>
      
    </div>
  )
}

export default FunctionCounter

