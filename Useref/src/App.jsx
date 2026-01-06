import { useState, useEffect, useRef } from 'react'
import './App.css'
import Stopwatch from './Components/Stopwatch'

function App() {
  // const [count, setCount] = useState(0)
  // const val = useRef(0)
  // const btnref = useRef() // created refrence for btnref

  // //  normal variable can not persist the value between the renders.so we use ref here that can persist the value between the renders
  // const handleclick = () => {
  //   val.current = val.current + 1
  //   console.log("value of val is ", val.current)
  //   setCount(count + 1)
  // }
  // // it runs on every render
  // useEffect(() => {
  //   console.log("Product added to the cart")
  // })

  // function changecolor() {
  //   btnref.current.style.backgroundColor = "red"
  // }
  return (
    <>
      {/* <div>
        Count:{count}
      </div>
      <div>
        <button
          ref={btnref} // accessed the btnref
          onClick={handleclick}>
          Increment
        </button>
      </div>

      <button onClick={changecolor}>
        Change the color of above button
      </button> */}
      <Stopwatch></Stopwatch>
    </>
  )
}

export default App
