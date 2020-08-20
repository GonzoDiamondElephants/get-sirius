import React, {useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Context } from '../../App.js';

function Bio(props) {
  const { currentUser } = useContext(Context);
  const { user } = useAuth0();

  return (
    <div className='bioWrapper'>
      <div id='headerContainer'>
        <div id='bannerImage'>
          <img
            src='https://opinionstage-res.cloudinary.com/image/upload/c_lfill,dpr_3.0,f_auto,fl_lossy,q_auto:good,w_400/v1/polls/bsevnhsp9oc6xmbppl5v'
            alt=''
          />
        </div>
        <div id='userInformation'>
          <div id='userProfilePic'>
            <img src={user.picture} alt={user.name} />
          </div>
          <div id='userName'>{currentUser.name}</div>
        </div>
        <div id='profileGrid'></div>
      </div>
    </div>
  );
}

export default Bio;
