import { useState } from 'react'
import Card from './Components/Card'

function App() {

  // create state
  // manage state
  // lift state
  // share state
  const [name, setName] = useState('')
  return (
    <>
      <Card title="Card_1" name={name} setName={setName}></Card>
      {/* <p>I am inside parent and value of name is: {name} </p> */}
      <Card title="Card_2" name={name} setName={setName}></Card>
      <Card title="Card_3" name={name} setName={setName}></Card>
    </>
  )
}

export default App
