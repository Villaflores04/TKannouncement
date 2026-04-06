const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory users storage
let users = [];

// Register endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).json({ message: "User already exists" });

  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
