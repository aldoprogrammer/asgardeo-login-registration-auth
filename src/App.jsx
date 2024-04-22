import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useAuthContext } from '@asgardeo/auth-react';

function App() {
  const [count, setCount] = useState(0);
  const { state, signIn, signOut } = useAuthContext();

  const consoleFunc = () => {
    const signInRedirectURL = import.meta.env.VITE_SIGNIN_REDIRECT_URL;
    const signOutRedirectURL = import.meta.env.VITE_SIGNOUT_REDIRECT_URL;
    const clientID = import.meta.env.VITE_CLIENT_ID;
    const baseUrl = import.meta.env.VITE_BASE_URL;
  
    console.log("signInRedirectURL:", signInRedirectURL);
    console.log("signOutRedirectURL:", signOutRedirectURL);
    console.log("clientID:", clientID);
    console.log("baseUrl:", baseUrl);
  };
  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {state.isAuthenticated ? (
        <h1>Vite + React + Asgaradeo Dashboard</h1>
      ): (<h1>Vite + React + Asgaradeo Please Login</h1>
    )}
      
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={consoleFunc}>Console</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {state.isAuthenticated ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </>
  );
}

export default App;
