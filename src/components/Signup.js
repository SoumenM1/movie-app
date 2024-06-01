// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: 'Student'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful!');
    navigate('/login'); // Redirect to login page after successful signup
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>Name:</label>
      <input type="text" name="name" value={user.name} onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" value={user.password} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={user.email} onChange={handleChange} required />
      <label>Phone Number:</label>
      <input type="text" name="phone" value={user.phone} onChange={handleChange} required />
      <label>Profession:</label>
      <select name="profession" value={user.profession} onChange={handleChange}>
        <option value="Student">Student</option>
        <option value="Engineer">Engineer</option>
        <option value="Doctor">Doctor</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
