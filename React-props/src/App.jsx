import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'


function App() {
  const [count, setCount] = useState(0);
  function Handleclick() {
    setCount(count + 1)
  }

  return (
    <>
      {/* <Card>
        <h1> This is Card component in react</h1>
        <p>Components in react are reusable parts</p>
      </Card> */}




      <Button Handleclick={Handleclick} text="click me">
        <h1>{count}</h1>
      </Button>

    </>
  )
}

export default App
