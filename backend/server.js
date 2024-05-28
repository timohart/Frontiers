const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

const users = {
  'user@example.com': 'password123',
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (users[email] && users[email] === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
