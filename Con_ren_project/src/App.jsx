import LoginBtn from "./Components/LoginBtn"
import Logout from "./Components/Logout"
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);


  if (!isLoggedIn) {
    return (
      <LoginBtn></LoginBtn>
    )
  }
  return (
    // This is conditional rendering using logical && operator
    <div>
      <h1>Welcome to the Ocean Shop </h1>
      <div>
        {isLoggedIn && <Logout></Logout>}
      </div>
    </div>
  )

  // this conditional rendering is done using if-else statement
  // if (isLoggedIn) {
  //   return (
  //     <>
  // < h1 > Welcome to the Oceab Shop </h1 >
  //       <Logout></Logout>
  //     </>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn></LoginBtn>
  //   )
  // }

  // This conditional rendering is done using ternary operator
  // return (
  //   <>
  //     {isLoggedIn ? <Logout></Logout> : <LoginBtn></LoginBtn>}

  //   </>
  // )

}

export default App
