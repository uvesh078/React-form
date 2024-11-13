import React, { useState, useEffect } from 'react';
import ForgetPassword from './ForgetPass';
import CustomAlert from './AlertError';
import { X } from 'lucide-react';

// Sign In Component
const SignIn = ({ onClose, onSignInSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', 'admin');
      localStorage.setItem('password', 'admin123');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
      onSignInSuccess(username);
      onClose();
    } else {
      setError('Invalid username or password');
    }
  };

  if (showForgetPassword) {
    return (
      <ForgetPassword
        onClose={() => setShowForgetPassword(false)}
        onSignInClick={() => setShowForgetPassword(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <CustomAlert message={error} />}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setShowForgetPassword(true)}
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;