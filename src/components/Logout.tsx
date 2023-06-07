import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Logout: React.FC = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      // Call the logout function from the auth context
      await authContext?.logout();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
