import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSuccess from "./components/LoginSuccess";
import Forgetpswd from "./components/Forgetpswd";
import Confirmpswd from "./components/Confirmpswd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp></SignUp>,
    },
    {
      path: "/Login",
      element: <Login></Login>,
    },
    {
      path: "/Success",
      element: <LoginSuccess></LoginSuccess>,
    },
    {
      path: "/Forgetpswd",
      element: <Forgetpswd></Forgetpswd>,
    },
    {
      path: "/confirmpswd",
      element: <Confirmpswd></Confirmpswd>,
    },
  ]);

  return <RouterProvider router={router}>
  
  <SignUp></SignUp>
  </RouterProvider>;
}

export default App;