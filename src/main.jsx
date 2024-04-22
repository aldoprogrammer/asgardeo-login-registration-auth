import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from '@asgardeo/auth-react';
import App from './App.jsx';
import './index.css';

const Index = () => (
  <AuthProvider
    config={{
      signInRedirectURL: 'http://localhost:5173',
      signOutRedirectURL: 'http://localhost:5173',
      clientID: 'LqHfwFklQIhVCDpryvYajoG1rhsa',
      baseUrl: 'https://api.asgardeo.io/t/org0fgc7',
      scope: ['openid', 'profile'],
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
