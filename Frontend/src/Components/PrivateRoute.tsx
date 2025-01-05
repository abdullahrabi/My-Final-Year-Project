import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Get token from localStorage

  if (!token) {
    // If token doesn't exist, redirect to login/signup page
    return <Navigate to="/login" />;
  }

  return children; // If token exists, allow access to the protected route
};

export default PrivateRoute;
