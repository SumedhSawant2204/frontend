// src/components/AddOrganization.jsx
import React, { useState } from "react";
import axios from "axios";

const AddOrganization = () => {
  const [orgDetails, setOrgDetails] = useState({ name: "", email: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/organizations", orgDetails).then(() => {
      alert("Organization added successfully!");
    });
  };

  return (
    <form className="add-organization-form" onSubmit={handleSubmit}>
      <h2 className="section-title">Add Organization</h2>
      <label>Name:</label>
      <input
        type="text"
        className="input"
        value={orgDetails.name}
        onChange={(e) => setOrgDetails({ ...orgDetails, name: e.target.value })}
      />
      <label>Email:</label>
      <input
        type="email"
        className="input"
        value={orgDetails.email}
        onChange={(e) => setOrgDetails({ ...orgDetails, email: e.target.value })}
      />
      <label>Location:</label>
      <input
        type="text"
        className="input"
        value={orgDetails.location}
        onChange={(e) => setOrgDetails({ ...orgDetails, location: e.target.value })}
      />
      <button className="btn-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddOrganization;