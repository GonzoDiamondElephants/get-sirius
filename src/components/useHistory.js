import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UseHistory = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log('user history.js', user);

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <p>{user.name}</p>
      </div>
    )
  );
};

export default UseHistory;
