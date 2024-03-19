import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseModal from "./BaseComponents/BaseModal.tsx";
import Home from "./Pages/Home.tsx";
import MySpace from "./Pages/MySpace.tsx";
import "./Styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mySpace" element={<MySpace />} />
        <Route path="/baseModal" element={<BaseModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
