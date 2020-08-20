import React, { useContext, useState, useEffect} from 'react';
import HomeButton from './homeButton.js';
import { Context } from '../App.js';
import axios from 'axios';

function Gringotts() {
  const { currentUser } = useContext(Context);
  console.log('gringotts.js', currentUser);
  const [balance, setBalance] = useState(0)

  const getTheBalance = async () => {
    let balance =  await axios.get(`${process.env.REACT_APP_API}/student/id/${currentUser._id}`);
    balance = balance.data.gringCoin;
    setBalance(balance);
  }
  
  useEffect(() => {
    getTheBalance();
  }, [currentUser]);

  return (
    <div className='bank'>
      <div class='grinContainer'>
        <HomeButton />
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
