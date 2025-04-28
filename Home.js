import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to SaveSense</h1>
      <p className="text-lg mb-6">Your AI Personal Finance Assistant</p>
      <Link to="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;