import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Errorpage from "./Pages/Error/Errorpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

export default App;
