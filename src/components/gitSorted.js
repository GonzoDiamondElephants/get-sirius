import React, {
  useEffect,
  useState,
  setState,
  useContext,
  useCallback,
} from 'react';
import HomeButton from './homeButton';
import axios from 'axios';
import AnimatedModal from './modals/sortedModal.js'
import { Context } from '../App';

const GitSorted = () => {
  const { currentUser } = useContext(Context);
  
  const [wowHouse, setWowHouse] = useState({});
  const [houseVal, setHouseVal] = useState(0);
  const [faveClass, setFaveClass] = useState(0);
  const [companionAnimal, setCompanionAnimal] = useState(0);
  const [wandType, setWandType] = useState(0);
  const [gift, setGift] = useState(0);
  const [book, setBook] = useState(0);

  const getTheHouse = useCallback(
    async (num) => {
      let houses = await axios.get('https://hp-houses-api.herokuapp.com/');
      houses = houses.data;
      let theHouse = {};
      for (let i = 0; i < houses.length; i++) {
        if (houses[i].magicNumber == num) {
          theHouse = houses[i];
          break;
        }
      }
      let balance = Math.floor(Math.random() * 10000000) + 100;
      console.log('balance balance', balance);
      console.log('typeof balance', typeof balance);
      console.log('house gitSortes', theHouse);
      console.log('current user', currentUser);
      axios.put(`${process.env.REACT_APP_API}/student/${currentUser._id}`, {
        houseDescription: theHouse.description,
        houseIcon: theHouse.icon,
        house: theHouse.houseName,
        gringCoin: balance,
      });
      setWowHouse(theHouse);
      return theHouse;
    },
    [currentUser._id]
  );

  useEffect(() => {
    getTheHouse(houseVal);
  }, [getTheHouse, houseVal]);

  const handleFaveClass = (e) => {
    setFaveClass(e.target.value);
  };
  const handleCompaionAnimal = (e) => {
    setCompanionAnimal(e.target.value);
  };
  const handleWandType = (e) => {
    setWandType(e.target.value);
  };
  const handleGift = (e) => {
    setGift(e.target.value);
  };
  const handleBook = (e) => {
    setBook(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let houseVal =
      parseInt(faveClass) +
      parseInt(companionAnimal) +
      parseInt(wandType) +
      parseInt(gift) +
      parseInt(book);
    houseVal = Math.round(houseVal / 5);
    setHouseVal(houseVal);
  };
  return (
    <div id='hogwartsBackground'>
      <HomeButton />
      <div id='formWrapper'>
        <form onSubmit={handleSubmit}>
          <h2 id='formTitle'>Welcome to Hogwarts</h2>
          <p className='quizQuestion'>What class are you most excited about?</p>
          <select name='favClass' onChange={handleFaveClass}>
            <option value='0' disabled selected>
              Pick your favorite...
            </option>
            <option value='1'>Defense Against the Dark Arts</option>
            <option value='2'>Potions</option>
            <option value='3'>Charms</option>
            <option value='4'>Herbology</option>
          </select>
          <br></br>
          <p className='quizQuestion'>
            For your first day, you'll need a companion animal. Which will you
            choose?
          </p>
          <select name='companionAnimal' onChange={handleCompaionAnimal}>
            <option value='0' disabled selected>
              Pick an animal...
            </option>
            <option value='1'>Owl</option>
            <option value='2'>Snake</option>
            <option value='3'>Badger</option>
            <option value='4'>Raven</option>
          </select>
          <br></br>
          <p className='quizQuestion'>
            You're at Olivander's, what wand's core would choose you?
          </p>
          <select name='wandType' onChange={handleWandType}>
            <option value='0' disabled selected>
              Pick a wand core...
            </option>
            <option value='1'>Dragon Heartstring</option>
            <option value='2'>White River Monster Spine</option>
            <option value='3'>Snallygaster heartstring</option>
            <option value='4'>Troll Whisker</option>
          </select>
          <br></br>
          <p className='quizQuestion'>
            It's your birthday and you've received a magical gift via Owl Post.
            What is it?
          </p>
          <select name='gift' onChange={handleGift}>
            <option value='0' disabled selected>
              Pick a gift...
            </option>
            <option value='1'>
              A hand-knit sweater with your first initial on the front
            </option>
            <option value='2'>Marauder's Map</option>
            <option value='3'>A Rememberal</option>
            <option value='4'>A Mature Potted Mandrake</option>
          </select>
          <br></br>
          <p className='quizQuestion'>
            What book would you check out for a bit of light reading?
          </p>
          <select name='book' onChange={handleBook} id='book'>
            <option value='0' disabled selected>
              Pick a book...
            </option>
            <option value='1'>Self Defense Spellbook</option>
            <option value='2'>Secrets of the Darkest Arts</option>
            <option value='3'>Fantastic Beasts</option>
            <option value='4'>Tales of Beedle the Bard</option>
          </select>
          <br></br>
       <AnimatedModal wowHouse={wowHouse}/> 
        <br></br>
        </form>
      </div>
    </div>
  );
};
export default GitSorted;
