import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State for tracking errors

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation checks for all fields
    if (!username) {
      formErrors.username = 'Username is required!';
    }
    if (!email) {
      formErrors.email = 'Email is required!';
    }
    if (!password) {
      formErrors.password = 'Password is required!';
    }

    // If there are errors, update the state and return
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    // Simulate API call
    console.log('User Registered:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.username && <div className="text-red-500">{errors.username}</div>}
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
      {errors.email && <div className="text-red-500">{errors.email}</div>}
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
      {errors.password && <div className="text-red-500">{errors.password}</div>}
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