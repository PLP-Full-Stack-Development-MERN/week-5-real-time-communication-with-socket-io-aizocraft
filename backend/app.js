import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Real-Time Notes API');
});

export default app;