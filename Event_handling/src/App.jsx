import './App.css'

function App() {
  function handleclick() {
    alert("Button is clicked")
  }
  function handlemouseover() {
    alert("Activity triggered")
  }
  function handlechange(e) {
    console.log("value changed to", e.target.value)
  }
  function handlesubmit(e) {
    e.preventDefault(); // to prevent page from reloading on form submission 
    alert("form submitted")
  }

  return (
    <> <div>
      <button onClick={alert("do not write function directly inside event, this is immediate invocation")}>
        {/* do not write function directly inside event, this is immediate invocation  */}
        click me
      </button>
      <div>
        <button onClick={() => alert("Button is clicked")}>
          {/* write function with refrence  */}
          Enter
        </button>
      </div>
    </div>




      {/* <div>
        <form type="text" onSubmit={handlesubmit}>
          <input type="text" />
          <button type='submit' >Submit</button>
        </form>
      </div> */}
      {/* <div>

        <p onMouseOver={handlemouseover} style={{ border: "1px solid black" }}>
          I am a paragraph
        </p>


        <button onClick={handleclick}>
          Click me
        </button>
      </div> */}
    </>
  )
}

export default App
