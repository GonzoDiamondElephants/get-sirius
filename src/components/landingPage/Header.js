import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// import materialIcons from "material-icons";
import {
  MonetizationOn,
  FlashOn,
  Redeem,
  People,
  AvTimer,
  Search,
  Notifications,
  ChatBubble,
  PersonAdd,
  CameraAlt,
} from '@material-ui/icons';
function Header(props) {
  const { user } = useAuth0();
  const { currentUser } = props;
  return (
    <header>
      <div className='tb'>
        <div className='td' id='logo'>
          <a href='https://www.google.com/'>
            <img
              src='https://toppng.com/public/uploads/preview/black-lightning-bolt-11549724236aueeuqvoqu.png'
              alt=''
            />
          </a>
        </div>
        <div className='td' id='searchForm'>
          <form method='get' action='https://www.google.com/'>
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
          <a href='https://www.google.com/' id='p-link'>
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
                  <PersonAdd
                    className='material-icons'
                    style={{ color: 'white' }}
                  />
                </span>
                <span className='td'>
                  <ChatBubble
                    className='material-icons'
                    style={{ color: 'white' }}
                  />
                </span>
                <span className='td m-active'>
                  <Notifications
                    className='material-icons'
                    style={{ color: 'white' }}
                  />
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
