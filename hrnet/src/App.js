import Header from "./components/layout/Header";
import {Outlet, RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router}/>
      </LocalizationProvider>
  );
}

export default App;
