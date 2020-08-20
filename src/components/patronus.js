import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { Context } from '../App';


const Patronus = () => {

  const {currentUser} = useContext(Context);
  const [beast, setBeast] = useState('');
  console.log('currentUser patronus', currentUser);
  
  const getPatronus = async () => {
    let options = await axios.get('https://gde-patronus.herokuapp.com/');
    let randomNum = Math.floor(Math.random() * Math.floor(9));
    options = options.data[randomNum];
    // await axios.put(`${process.env.REACT_APP_API}/student/${currentUser._id}`, {patronus: options.patronus});
    setBeast(options.patronus);
    console.log('patronus', options.patronus);
  }
 useEffect( () => {
  getPatronus();
 },[currentUser])
  return(
    <>
    <h1>{beast}</h1>
    </>
  )
}
export default Patronus;