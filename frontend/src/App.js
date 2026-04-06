import React, { useState } from "react";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const url = isLogin ? "/login" : "/register";
      const res = await axios.post(url, { username, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.logo}>TKannouncement</h1>

        <h2 style={styles.title}>
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        <input
          style={styles.input}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p style={styles.message}>{message}</p>

        <p style={styles.switch}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>

        <button
          style={styles.switchBtn}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create one" : "Login instead"}
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3a8a, #facc15)", // blue → yellow
    fontFamily: "Arial, sans-serif"
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  logo: {
    color: "#1e3a8a",
    marginBottom: "10px"
  },
  title: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#1e3a8a",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },
  message: {
    marginTop: "15px",
    color: "#1e3a8a"
  },
  switch: {
    marginTop: "15px",
    fontSize: "14px"
  },
  switchBtn: {
    background: "none",
    border: "none",
    color: "#facc15",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default App;
