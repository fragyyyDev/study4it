import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import HistoryTests from "./pages/HistoryTests";
import Tests from "./pages/Tests";
import FetchUserInfo from "./components/FetchUserInfo";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import InformationTests from "./pages/InformationTest";

const App = () => {
  return (
    <Router>
      <FetchUserInfo>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testy" element={<Tests />} />
          <Route path="/historie" element={<HistoryTests />} />
          <Route path="/statistiky" element={<Stats />} />
          <Route path="/zebricek" element={<Dashboard />} />
          <Route path="/informace" element={<InformationTests />} />
          <Route path="/notifikace" element={<Dashboard />} />
          <Route path="/novinky" element={<Dashboard />} />
          <Route path="/nastaveni" element={<Settings />} />
          <Route path="/navody" element={<Dashboard />} />
          <Route path="/premium" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FetchUserInfo>
    </Router>
  );
}

export default App