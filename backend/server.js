import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Import and configure socket
import socketConfig from './config/socketConfig.js';
socketConfig(io);

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});