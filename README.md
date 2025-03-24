# Real-Time Collaborative Notes App

A full-stack MERN application with Socket.io for real-time collaboration. Multiple users can simultaneously edit notes in shared rooms with changes reflected instantly.

![App Screenshot](https://via.placeholder.com/800x500?text=Real-Time+Collaborative+Notes+Screenshot)

## Features

- Real-time note editing with Socket.io
- Room-based collaboration
- Live user presence indicators
- Simple and intuitive UI
- Responsive design

## Tech Stack

| Frontend               | Backend              | Real-Time           | Database (Optional) |
|------------------------|----------------------|---------------------|---------------------|
| React 18               | Express.js           | Socket.io           | MongoDB             |
| Vite                   | Node.js              | WebSockets          | Mongoose            |
| Tailwind CSS 3.3       | REST API             |                     |                     |
| React Router           | CORS middleware      |                     |                     |

## Project Structure
```bash

real-time-notes/
├── backend/ # Express + Socket.io server
│ ├── config/ # Configuration files
│ ├── controllers/ # Business logic
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── app.js # Express app setup
│ ├── server.js # HTTP server + Socket.io
│ └── package.json
│
├── frontend/ # React application
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── context/ # React context providers
│ │ ├── hooks/ # Custom hooks
│ │ ├── pages/ # Page components
│ │ ├── App.jsx # Main component
│ │ └── main.jsx # Entry point
│ ├── package.json
│ ├── vite.config.js
│ └── tailwind.config.js
│
├── .gitignore
└── README.md
```

## API Endpoints

| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| GET    | /                 | Health check                         |
| GET    | /api/notes/:room  | Get note for a room (future feature) |
| POST   | /api/notes        | Save a note (future feature)         |

Socket.io Events:
- `join-room`: Join a collaboration room
- `update-note`: Broadcast note changes
- `note-updated`: Receive note updates
- `user-connected`: Notify when users join

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB (optional for future features)

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend

    Install dependencies:
    bash
    Copy

    npm install

    Create .env file:
    bash
    Copy

    touch .env

    Add environment variables:
    env
    Copy

    PORT=3001
    CLIENT_URL=http://localhost:5173
    # MONGODB_URI=mongodb://localhost:27017/real-time-notes 

    Start the server:
    bash
    Copy

    npm start
    # or for development with nodemon:
    npm run dev

Frontend Setup

    Navigate to frontend directory:
    bash
    Copy

    cd ../frontend

    Install dependencies:
    bash
    Copy

    npm install

    Start the development server:
    bash
    Copy

    npm run dev

    Open your browser at:
    Copy

    http://localhost:5173

Running the Application

    Start both servers as described above

    Open two browser windows/tabs

    Navigate to http://localhost:5173 in both

    Enter the same room ID in both windows

    Start typing in one window - changes will appear in real-time in the other
 