import React, { useState, useEffect } from 'react';
import Header from './landingPage/Header.js';
import Bio from './landingPage/Bio.js';
import MainContent from './landingPage/MainContent.js';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function HomePage() {
  const [currentUser, setCurrentUser] = useState({});
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (!user) return;
    Axios.post(`${process.env.REACT_APP_API}/student`, user)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.error(e);
      });

    const checker = async () => {
      let currentStudent = await Axios.get(
        `${process.env.REACT_APP_API}/student/sub/${user.sub}`
      );

      if (currentStudent) {
        setCurrentUser(currentStudent.data);
      }
      //else
      //  if (currentStudent) {
      //   Axios.post(`${process.env.REACT_APP_API}/student`)
      //     .then((response) => {
      //       return response.data;
      //     })
      //     .catch((e) => {
      //       console.error(e);
      //     });
      // }
    };
    checker();
  }, [user]);

  return (
    isAuthenticated && (
      <div className='homePage'>
        <Header currentUser={currentUser} />
        <Bio />
        <MainContent currentUser={currentUser} />
      </div>
    )
  );
}

export default HomePage;
