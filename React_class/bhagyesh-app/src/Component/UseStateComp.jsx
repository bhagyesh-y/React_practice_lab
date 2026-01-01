import React, { useState } from 'react'

const UseStateComp = () => {
    let [name, setName] = useState('React')
    let [count, setCount] = useState(0)

    let changeName = () => {
        alert('name has been changed')
        setName('PYTHON')
    }
    let Increment = () => {
        setCount(count + 1)

    }
    return (
        <>{console.log('render')
        }
            <h2>Use  state Component</h2>
            <h2>name={name}</h2>
            <h2>count:{count}</h2>
            <button onClick={changeName}>Change</button>
            <button onClick={Increment}>Increment</button>



        </>
    )
}

export default UseStateComp