import React, { useState } from 'react';
import { getProtectedData } from '../services/authService';

const Protected = ({ token }) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await getProtectedData(token);
      setData(response.message);
    } catch (error) {
      setError('Access denied. Invalid token.');
    }
  };

  return (
    <div>
      <h2>Protected Route</h2>
      <button onClick={fetchData}>Get Protected Data</button>
      {data && <p>{data}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
export default Protected;
