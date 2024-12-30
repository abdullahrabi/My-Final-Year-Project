import React, { useState } from 'react';
import { register } from '../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      setMessage(response.message);
    } catch (error) {
      setMessage('Registration failed. Try again.');
    }
  };
};

export default Register;
