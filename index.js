const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// SQL Server Configuration
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true', // Use encryption if required
    trustServerCertificate: true,  // For local dev, disable SSL certificate checks
  }
};

// Test the database connection
sql.connect(sqlConfig)
  .then(() => console.log('Connected to SQL Server'))
  .catch((err) => console.error('Database connection failed:', err));

// POST route to insert data into a table
app.post('/insert', async (req, res) => {
  const { name, age } = req.body;

  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('name', sql.NVarChar, name)
      .input('age', sql.Int, age)
      .query('INSERT INTO Users (name, age) VALUES (@name, @age)');

    res.status(201).json({ message: 'User added successfully', result });
  } catch (error) {
    console.error('Insert error:', error);
    res.status(500).json({ error: 'Failed to insert data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
