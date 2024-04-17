
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bmical from "./Bmi";
import Nav from './NavBar'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav></Nav><Bmical></Bmical></>,
  },
]);

function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
