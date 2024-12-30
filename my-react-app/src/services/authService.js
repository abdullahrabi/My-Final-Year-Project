import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Backend ka base URL

// Signup API call
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login API call
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

// Get Protected Data
export const getProtectedData = async (token) => {
  const response = await axios.get(`${API_URL}/protected`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};