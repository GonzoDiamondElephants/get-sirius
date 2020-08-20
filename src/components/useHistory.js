import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

const UseHistory = () => {
  const { user, isAuthenticated } = useAuth0();
  let newUser = [];
  const getUsersFromDB = async () => {
  };

  getUsersFromDB();

  return (
    isAuthenticated && (
      <div>
        <p>{user.name}</p>
      </div>
    )
  );
};

export default UseHistory;
