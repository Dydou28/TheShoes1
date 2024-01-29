import Login from "@pages/Login.jsx";
import Dashboard from "@pages/Dashboard.jsx";
import Register from "@pages/Register.jsx";
import Reset from "@pages/Reset.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* import ProtectedRoute from "./components/ProtectedRoute"; */
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
