import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import About from './Components/About'
import Navbar from './Components/Navbar';



const router = createBrowserRouter(
  [
    { path: '/', element: <div><Navbar> <Home /></Navbar></div> },
    { path: '/about', element: <div><Navbar><About /></Navbar></div> },
    { path: '/dashboard', element: <div><Navbar><Dashboard /></Navbar></div> },
  ]
)
function App() {


  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
