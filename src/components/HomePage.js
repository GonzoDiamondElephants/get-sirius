import React, { useState, useEffect, useContext } from 'react';
import Header from './landingPage/Header.js';
import Bio from './landingPage/Bio.js';
import MainContent from './landingPage/MainContent.js';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Context } from '../App.js';

function HomePage(props) {
  const {setCurrentUser} = useContext(Context)
  // const [currentUser, setCurrentUser] = useState({});
  const { isAuthenticated, user } = useAuth0();
  // const {checker, currentUser} = props
  // console.log('props in homepage', props);
  // console.log('checker in homepage', checker);
  // console.log('user in homepage', user);

  useEffect(() => {
    const checker = async () => {
      if (user) {
        let currentStudent = await Axios.get(
          `${process.env.REACT_APP_API}/student/sub/${user.sub}`
        );
        if (currentStudent.data.length > 0) {
          setCurrentUser(currentStudent.data[0]);
        } else if (currentStudent.data.length === 0) {
          let postUser = await Axios.post(
            `${process.env.REACT_APP_API}/student`,
            user
          );
          setCurrentUser(postUser.data);
        }
      }
    };
  
      checker(user);
  
  }, [user]);

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
