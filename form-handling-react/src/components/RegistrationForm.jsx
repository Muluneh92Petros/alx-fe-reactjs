import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation checks for all fields
    if (!username) {
      setError('Username is required!');
      return;
    }
    if (!email) {
      setError('Email is required!');
      return;
    }
    if (!password) {
      setError('Password is required!');
      return;
    }
    
    setError('');

    // Simulate API call
    console.log('User Registered:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;