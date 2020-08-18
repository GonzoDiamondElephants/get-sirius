import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

const UseHistory = () => {
  const { user, isAuthenticated } = useAuth0();
  let newUser = [];
  const getUsersFromDB = async () => {
    // let currentUser = await Axios.get('http://localhost:5000/api/vi/student');
    // let compare = currentUser.data.map((student) => student.sub);
    // console.log('compare', compare[1]);
    // if (compare === user.sub) {
    //   return newUser.push(user);
    // }
  };

  getUsersFromDB();

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
