import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0)

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    // dispatch({ type: 'counter/reset' });
    dispatch(reset());
  }
  function handleAddAmountClick() {
    dispatch(incrementByAmount(amount));
  }


  return (
    <>
      <div className="container">
        <h1>
          Redux counter app
        </h1>
        <p>Count:{count}</p>
        <button onClick={handleIncrementClick}>
          Increment
        </button>
        <br />
        <hr />
        <button onClick={handleDecrementClick}>
          Decrement
        </button>
        <br />
        <hr />
        <button onClick={handleResetClick}>
          Reset
        </button>
        <hr />
        <button onClick={handleAddAmountClick}>
          Add amount
        </button>
        <input type="number" value={amount}
          placeholder='Enter amount'
          onChange={(e) => setAmount(e.target.value)} />

      </div>

    </>
  )
}

export default App
