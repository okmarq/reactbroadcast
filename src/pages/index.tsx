// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app/App';
import AuthProvider from '@/services/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
