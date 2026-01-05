import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import About from './Components/About'
import Navbar from './Components/Navbar';
import Paramcomp from './Components/Paramcomp';
import Courses from './Components/Courses';
import Students from './Components/Students';
import Settings from './Components/Settings';
import NotFound from './Components/NotFound';



const router = createBrowserRouter(
  [
    { path: '/', element: <div><Navbar /> <Home /></div> },
    { path: '/about', element: <div><Navbar /><About /></div> },
    {
      path: '/dashboard', element: <div><Navbar /><Dashboard /></div>,
      children: [
        { path: 'courses', element: <Courses /> },
        { path: 'students', element: <Students /> },
        { path: 'settings', element: <Settings /> }
      ]

    },
    {
      path: "/student/:id", element: <div><Navbar /><Paramcomp /></div>
    },
    {
      path: "*", element: <NotFound />
    }
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
