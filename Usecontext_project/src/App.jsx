import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA';


// Step 1 : Create Context
const UserContext = createContext();
// Step 2 : Wrap all the children with context provider
// Step 3 : Provide a value to the provider
// Step 4  : Consume the value from the context in child components using usecontext hook where you want to use the value 

// Creating context for theme 
const Themecontext = createContext();

function App() {
  const [user, setUser] = useState("Bhagyeshree Yadav");
  const [theme, setTheme] = useState('dark');

  return (

    <>
      <UserContext.Provider value={user}>
        <Themecontext.Provider value={{ theme, setTheme }}>
          <div className="container" style={{ backgroundColor: theme === 'light' ? "beige" : "black" }}>
            <ChildA> </ChildA>

          </div>
        </Themecontext.Provider>

      </UserContext.Provider>


      {/* <UserContext.Provider value={user}>
        <ChildA></ChildA>
      </UserContext.Provider> */}

    </>
  )
}

export default App
export { UserContext }
export { Themecontext }
