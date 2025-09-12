// src/App.jsx

import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import DSA from "./pages/DSA";
import Contests from "./pages/contest";
import Header from "./Components/Header";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Home
    </button>
  );
};

const App = () => (
  <div style={{ textAlign: "center" }}>
    
    <Button />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/contests" element={<Contests />} />
    </Routes>
  </div>
);

export default App;