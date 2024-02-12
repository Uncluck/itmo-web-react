import React from "react";
import Main from "./components/pages/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sedan from "./components/pages/cars/Sedan";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/sedan" element={<Sedan />} />
              <Route path="*" element={<Main />} />
          </Routes>
      </Router>
  );
}

export default App;
