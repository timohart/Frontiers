const express = require('express');
const { connectToDatabase } = require('./db');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM your_table'); // Replace with your query
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Error retrieving data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
