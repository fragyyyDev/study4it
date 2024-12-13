import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/testy" element={<Dashboard />} />
        <Route path="/historie" element={<Dashboard />} />
        <Route path="/statistiky" element={<Dashboard />} />
        <Route path="/notifikace" element={<Dashboard />} />
        <Route path="/novinky" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App