import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <BrowserRouter>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="App">
            <Routes>
              <Route path="/" element={<CreateEmployee />}/>
              <Route path="/employees" element={<CurrentEmployees />}/>
            </Routes>
          </div>
        </LocalizationProvider>

    </BrowserRouter>
  );
}

export default App;
