import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import PopperPopupState from "./page/Poper/Poper";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new" element={<PopperPopupState />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
