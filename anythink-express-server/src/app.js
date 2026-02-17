const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 8001;

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'postgres',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'anythink-market',
});

// Track database connection status
let dbConnected = false;

// Attempt to connect to the database without blocking server startup
pool.on('connect', () => {
  dbConnected = true;
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  dbConnected = false;
  console.error('PostgreSQL pool error:', err);
});

// Try initial connection asynchronously
pool.query('SELECT 1', (err) => {
  if (err) {
    console.warn('Initial database connection failed:', err.message);
    dbConnected = false;
  } else {
    dbConnected = true;
    console.log('Successfully connected to PostgreSQL database');
  }
});

// Health check endpoint - returns 200 immediately
app.get('/', (req, res) => {
  res.status(200).send('Server is running');
});

// Database status endpoint (for monitoring)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    database: dbConnected ? 'connected' : 'disconnected'
  });
});

// Graceful shutdown handler
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    pool.end(() => {
      console.log('Database pool closed');
      process.exit(0);
    });
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on 0.0.0.0:${PORT}`);
});

module.exports = app;
