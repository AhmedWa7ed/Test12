import logo from './logo.svg';
import './App.css';
import Welcme from './Welcme';
import "bootstrap/dist/css/bootstrap.min.css"
import  "bootstrap/dist/js/bootstrap.bundle"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Ahmed from './Ahmed/Ahmed';
// import Nav from './Ahmed/Nav';
import Omer from './Ahmed/Omer';
import Memo from './Ahmed/Memo';
import Layout from './Ahmed/Layout';


let rouers = createBrowserRouter([
  {path:"" , element:<Layout/>  , children:[
    {path:"Ahmed" , element: <Ahmed/>},
    {path:"Omer" , element: <Omer/>},
    {path:"Memo" , element: <Memo/>},
  ]}
])




function App() {
  return <RouterProvider router={rouers}></RouterProvider>

  // <RouterProvider router={rouers}></RouterProvider>
}

export default App;