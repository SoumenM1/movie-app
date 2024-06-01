// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === credentials.name && storedUser.password === credentials.password) {
      navigate('/movies');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Name:</label>
      <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </form>
  );
};

export default Login;
