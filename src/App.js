import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Radio from "./pages/Radio";
import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
