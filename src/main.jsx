import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@asgardeo/auth-react';
import App from './App.jsx';
import './index.css';

const Index = () => (
  <AuthProvider
    config={{
      signInRedirectURL: import.meta.env.VITE_SIGNIN_REDIRECT_URL,
      signOutRedirectURL: import.meta.env.VITE_SIGNOUT_REDIRECT_URL,
      clientID: import.meta.env.VITE_CLIENT_ID,
      baseUrl: import.meta.env.VITE_BASE_URL,
      scope: ['openid', 'profile'],
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
