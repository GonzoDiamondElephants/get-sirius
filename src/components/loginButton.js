import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (!user) return;
    const checker = async () => {
      let currentStudent = Axios.get(`/api/vi/student/${user.sub}`);
      console.log('we are inside currentStudent', currentStudent);
      if (currentStudent) {
        Axios.post('/api/vi/student', user)
          .then((response) => {
            return response.data.name;
          })
          .catch((e) => {
            console.error(e);
          });
      }
    };
    checker();
  });

  return (
    !isAuthenticated && (
      <div>
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Log In
        </button>
      </div>
    )
  );
};

export default LoginButton;
