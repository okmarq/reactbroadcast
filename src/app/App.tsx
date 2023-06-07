import React, { useContext } from 'react';
import { AuthContext } from '@/services/AuthContext';

const App: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
        {/* for the below, rather than do the test immediately here, implement a route to the appropriate pages */}
      {authContext?.user ? (
        <button onClick={authContext.logout}>Logout</button>
      ) : (
        <button onClick={() => authContext?.login('test@example.com', 'password')}>Login</button>
      )}
    </div>
  );
};

export default App;
