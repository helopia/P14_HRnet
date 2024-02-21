import Header from "./components/layout/Header";
import {Outlet, RouterProvider} from "react-router-dom";
import {router} from "./router/router";

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
