import React, { useState } from 'react';
import { login } from '../services/authService';

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      setToken(response.token);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed. Check your credentials.');
    }
  };
};

export default Login;
