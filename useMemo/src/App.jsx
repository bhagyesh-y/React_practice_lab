import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expTask(num) {
    console.log("Inside expensive task")
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }
  let dbValue = useMemo(() => expTask(input), [input]);
  // first parameter is function and second parameter is dependency list in which if change occurs then trigger the function i.e. first parameter  
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)
        }>Increment</button>
        <p>Count:{count}</p>
        <input type="number" placeholder='Enter Number' value={input}
          onChange={(e) => setInput(e.target.value)} />
        <p>Double:{dbValue}</p>
      </div>
    </>
  )
}

export default App
