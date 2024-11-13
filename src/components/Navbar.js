import React, { useState, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import SignIn from './SignIn';

// Navbar Component
const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState(null);
  
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      handleSignInSuccess(storedUsername);
    }
  }, []);

  const handleSignInSuccess = (user) => {
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setUsername(null);
  };

  
  return (
    <>
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Welcome</div>
          <div className="flex items-center space-x-4">
            {username ? (
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{username}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSignIn(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      {showSignIn && (
        <SignIn
          onClose={() => setShowSignIn(false)}
          onSignInSuccess={handleSignInSuccess}
        />
      )}
    </nav>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            {username ? `Welcome, ${username}!` : 'Welcome to our App'}
          </h1>
          <p className="text-lg">
            Enjoy our app and explore all the features we have to offer.
          </p>
        </div>
      </div>
  </>
  );
};

export default Navbar;