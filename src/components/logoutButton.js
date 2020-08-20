import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  ExitToApp  
  } from '@material-ui/icons';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <div onClick={() => logout()}>
        <ExitToApp
        className='material-icons'
        style={{ color: 'white' }}
        />
        </div>

      </div>
    )
  );
};

export default LogoutButton;
