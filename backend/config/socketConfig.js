export default (io) => {
    io.on('connection', (socket) => {
      console.log(`User connected: ${socket.id}`);
  
      // Join a room
      socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', socket.id);
        console.log(`User ${socket.id} joined room ${roomId}`);
      });
  
      // Handle note updates
      socket.on('update-note', (roomId, noteContent) => {
        socket.to(roomId).emit('note-updated', noteContent);
      });
  
      // Handle disconnection
      socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
      });
    });
  };