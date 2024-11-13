// import React from "react";
import CustomAlert from "./AlertError";
import React, { useState } from 'react';
import { X } from 'lucide-react';

// Forget Password Component
const ForgetPassword = ({ onClose, onSignInClick }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const storedPassword = localStorage.getItem('password');
      
      if (oldPassword !== storedPassword) {
        setError('Old password is incorrect');
        return;
      }
      
      if (newPassword !== confirmPassword) {
        setError('New passwords do not match');
        return;
      }
      
      localStorage.setItem('password', newPassword);
      setMessage('Password updated successfully!');
      setTimeout(() => {
        onClose();
      }, 2000);
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            >
            <X className="h-5 w-5" />
            </button>
          <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && <CustomAlert message={error} />}
            {message && <CustomAlert variant="success" message={message} />}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Reset Password
              </button>
              <button
                type="button"
                onClick={onSignInClick}
                className="text-blue-500 hover:underline"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default ForgetPassword;