import React, { useState, useEffect } from 'react';
import Header from './landingPage/Header.js';
import Bio from './landingPage/Bio.js';
import MainContent from './landingPage/MainContent.js';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function HomePage() {
  const [currentUser, setCurrentUser] = useState('');
  console.log('in the state', currentUser);
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (!user) return;
    const checker = async () => {
      let currentStudent = await Axios.get(
        `${process.env.REACT_APP_API}/student/find/${user.sub}`
      );
      if (currentStudent) {
        setCurrentUser({ currentUser: currentStudent.data });
      }
      console.log('current user state inside home page ', currentUser);
      // if (currentStudent) {
      //   Axios.post(`${process.env.REACT_APP_API}/student`, user)
      //     .then((response) => {
      //       return response.data.name;
      //     })
      //     .catch((e) => {
      //       console.error(e);
      //     });
      // }
    };
    checker();
  }, [currentUser, user]);

  return (
    isAuthenticated && (
      <div className='homePage'>
        <Header />
        <Bio />
        <MainContent />
      </div>
    )
  );
}

export default HomePage;
