const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow requests from the frontend
app.use(express.json()); // Parse incoming JSON requests

let messages = [];
let users = [];

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const newMessage = req.body;
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
