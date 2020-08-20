import React, {useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "../logoutButton.js"
import { Link } from 'react-router-dom';
import { Context } from '../../App.js';

// import materialIcons from "material-icons";
import {
  Search
} from '@material-ui/icons';
function Header(props) {
  const { user } = useAuth0();
  const { currentUser } = useContext(Context);
  return (
    <header>
      <div className='tb'>
        <div className='td' id='logo'>
          <a href="https://admiring-euclid-bff953.netlify.app/" rel="noopener noreferrer" target="_blank">     
            <img
              src='https://toppng.com/public/uploads/preview/black-lightning-bolt-11549724236aueeuqvoqu.png'
              alt=''
            />
          </a>

        </div>
        <div className='td' id='searchForm'>
          <form method='get' action='https://www.google.com/search'>
            <input
              type='text'
              placeholder='Search the Worldwide Wizarding Web'
            />
            <button type='submit'>
              <Search />
            </button>
          </form>
        </div>
        <div className='td'>
          <a href='https://thumbs.gfycat.com/TanDishonestAfricanfisheagle-size_restricted.gif' id='p-link'>
            <img src={user.picture} alt={user.name} />
          </a>
        </div>
        <div className='td' id='firstAndLast'>
          <span>Alohomora, {currentUser.name}</span>
        </div>
        <div className='td' id='i-links'>
          <div className='tb'>
            <div className='td' id='m-td'>
              <div className='tb'>
                <span className='td'>
              <LogoutButton />
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
