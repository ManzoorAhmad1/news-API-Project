import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootesLayout from './Component/Navbar/Rootes';
import Home from "./Component/Pages/Home";
import Business from './Component/Pages/Business';
import Technology from './Component/Pages/Technology';
import Entertainment from './Component/Pages/Entertainment';
import Health from './Component/Pages/Health';
import Science from './Component/Pages/Science';
import Sports from './Component/Pages/Sports';
function App() {

  const Router = createBrowserRouter([
    {
      path: "/", element: <RootesLayout />, children: [
        { index: true, element: <Home /> },
        { path: "sports", element: <Sports /> },
        { path: "bussines", element: <Business /> },
        { path: "Technology", element: <Technology /> },
        { path: "entertainment", element: <Entertainment /> },
        { path: "health", element: <Health /> },
        { path: "science", element: <Science /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
