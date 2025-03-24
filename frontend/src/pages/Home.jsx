import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Collaborative Notes</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="roomId" className="block text-sm font-medium text-gray-700 mb-2">
              Room ID
            </label>
            <input
              type="text"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter a room ID"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
}