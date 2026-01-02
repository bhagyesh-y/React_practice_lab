import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='counter-container'>
            <p>You have clicked {count} times</p>
            <button onClick={() => { setCount(count + 2) }}>Click me </button>

        </div>
    )
}

export default Counter