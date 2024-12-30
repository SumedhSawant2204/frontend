import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/organizations").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="home">
      <h2 className="section-title">Organizations</h2>
      {data.map((org) => (
        <div key={org.id} className="organization-card">
          <h3 className="organization-name">{org.name}</h3>
          <p>Email: {org.email}</p>
          <p>Location: {org.location}</p>
          <div className="teams">
            <h4>Teams:</h4>
            {org.teams.map((team) => (
              <div key={team.id} className="team">
                <h5 className="team-name">{team.name}</h5>
                <ul className="members-list">
                  {team.members.map((member) => (
                    <li key={member.id} className="member">
                      {member.name} - Status: 
                      <span className={
                        member.image ? "status-uploaded" : "status-not-uploaded"
                      }>
                        {member.image ? "Image Uploaded" : "Image Not Uploaded"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;