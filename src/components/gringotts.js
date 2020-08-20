import React, { useContext } from 'react';
import HomeButton from './homeButton.js';
import { Context } from '../App.js';
import axios from 'axios';
function Gringotts() {
  const { currentUser , balance } = useContext(Context);
  console.log('gringotts.js', currentUser);

  // let balance =  axios.get(
  //   `${process.env.REACT_APP_API}/student/id/${currentUser._id}`
  // )

  return (
    <div className='bank'>
      <div class='grinContainer'>
        <HomeButton />

        {/* 
        <img
          src="https://raw.githubusercontent.com/testOrg762/testPic/master/journal.png"
          alt="journal"
          id="journalImg"
        /> */}
        <div class='text-block'>
          <h1 id='grinHead'>Welcome to Gringotts</h1>
          <p id='grinText'>Your current balance is: </p>
          <p id='grinBalance'> {balance} Gringcoin Galleons</p>
        </div>
      </div>
    </div>
  );
}

export default Gringotts;
