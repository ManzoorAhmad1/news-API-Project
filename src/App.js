import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootesLayout from './Component/Rootes';
import Home from "./Component/Pages/Home"
function App() {
 
  const Router=createBrowserRouter([
    {path:"/",element:<RootesLayout/>,children:[
      {index:true,element:<Home/>}
    ]}
  ])

  return (
    <>
    <RouterProvider router={Router}/>
    </>
  );
}

export default App;
