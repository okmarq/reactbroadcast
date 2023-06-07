import React, { useContext, useState } from 'react';
import { AuthContext } from '@/services/AuthContext';

const Logout: React.FC = () => {
  const [error, setError] = useState('');

  const authContext = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await authContext?.logout();
    } catch (error) {
      setError('Failed to logout.');
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      {error && <p>{error}</p>}
    </>
  );
};

export default Logout;
