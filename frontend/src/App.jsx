import "./App.css";

import { Routes, Route } from "react-router-dom";

import Accueil from "@pages/Accueil/Accueil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
