import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddOrganization from "./components/AddOrganization";

function App() {
  return (
    <div>
      <div className="navbar">
        <h1 className="navbar-title">Dashboard</h1>
        <nav className="navbar-links">
          <Link className="navbar-link" to="/">Home</Link>
          <Link className="navbar-link" to="/add-organization">Add Organization</Link>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-organization" element={<AddOrganization />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
