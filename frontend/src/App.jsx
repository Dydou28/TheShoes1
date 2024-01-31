import "./App.css";

import { Routes, Route } from "react-router-dom";
// import background from "@assets/fond-ecran.png";

import Accueil from "@pages/Accueil/Accueil";

function App() {
  return (
    // <div className="App" style={{ backgroundImage: `url(${background})` }}>
    <Routes>
      <Route exact path="/" element={<Accueil />} />
    </Routes>
    // </div>
  );
}

export default App;
