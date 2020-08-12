import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  console.log('am i here');
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        onClick={() => {
          console.log('inside on click');
          loginWithRedirect();
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginButton;
