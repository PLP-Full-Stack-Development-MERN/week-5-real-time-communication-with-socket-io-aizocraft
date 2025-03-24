import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSocket } from '../context/SocketContext';

export default function Room() {
  const { roomId } = useParams();
  const socket = useSocket();
  const [noteContent, setNoteContent] = useState('');
  const [users, setUsers] = useState([]);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!socket) return;

    // Join the room
    socket.emit('join-room', roomId);

    // Listen for note updates
    socket.on('note-updated', (content) => {
      setNoteContent(content);
    });

    // Listen for user connections
    socket.on('user-connected', (userId) => {
      setUsers(prev => [...prev, userId]);
    });

    return () => {
      socket.off('note-updated');
      socket.off('user-connected');
    };
  }, [socket, roomId]);

  const handleNoteChange = (e) => {
    const content = e.target.value;
    setNoteContent(content);
    socket.emit('update-note', roomId, content);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Room: {roomId}</h1>
          <div className="text-sm text-gray-600">
            {users.length} user(s) online
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <textarea
            ref={editorRef}
            value={noteContent}
            onChange={handleNoteChange}
            className="w-full h-96 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Start collaborating on your note..."
          />
        </div>
      </div>
    </div>
  );
}