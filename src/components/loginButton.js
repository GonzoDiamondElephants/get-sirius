import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log('redirect2222222', user);

  const userPost = () => {
    Axios.post('/student', user);
    console
      .log('i am in schema')
      .then((response) => {
        console.log('henok usersssss ', response);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    !isAuthenticated && (
      <div>
        <button
          onClick={() => {
            loginWithRedirect();
            userPost();
          }}
        >
          Log In
        </button>
      </div>
    )
  );
};

export default LoginButton;
