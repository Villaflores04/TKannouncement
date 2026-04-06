import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://tkannouncement.onrender.com"; // your Render backend URL

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API_URL}/register`, { username, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/login`, { username, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>TKannouncement Login/Register</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin} style={{ marginLeft: "10px" }}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
