import React from 'react';
import LoginButton from './components/loginButton.js';
import LogoutButton from './components/logoutButton.js';
import UsersHistory from './components/useHistory.js';
import TestBackEnd from './components/testBackEnd.js';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0();
  if(isLoading) return(<div>Loading.......</div>)
  return (
    <>
      <h1>Home Page</h1>
      <LoginButton />
      <LogoutButton />
      <UsersHistory/>
      <TestBackEnd/>
    </>
  );
}

export default App;
