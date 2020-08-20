import React, { useContext, useState } from 'react';
import Chatroom from '../chatRoom';
import PatronusModal from '../modals/patronusModal.js'
import { Context } from '../../App.js';

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  House,
  LocationOn,
  MonetizationOn,
  FlashOn,
  Redeem,
  ChatBubble,
} from '@material-ui/icons';

function MainContent(props) {
  const { currentUser } = useContext(Context);

  const clickHandler = async () => {
    let getStudent = await axios.get(
      `${process.env.REACT_APP_API}/student/id/${currentUser._id}`
    );
    let balance = getStudent.data.gringCoin;
    if (!balance) {
      balance = 0;
    }
    parseInt(balance);
    balance = balance + 20;
    currentUser.gringCoin = currentUser.gringCoin +20;
    await axios.put(`${process.env.REACT_APP_API}/student/${currentUser._id}`, {
      gringCoin: balance,
    });
    return;
  };

  const { user } = useAuth0();
  return (
    <div id='mainContent'>
      <div className='tb'>
        <div className='td' id='leftColumn'>
          <div className='leftComponentContainers'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='introIcon'></i>

       

              <span> Location</span>
              <div className='leftSideActionIcon'>
                
              </div>

            </div>
            <div id='introBox'>
              <div id='introLine'> Hogwarts</div>

              <div id='userLocation'>


              <LocationOn
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                <a href='https://bit.ly/3aAJhgy' target="_blank" rel="noopener noreferrer">
                54.939196,-3.929788
                </a>

              </div>
            </div>
          </div>
          <div className='leftComponentContainers leftSpacing'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='patronusIcon'></i>
              <span> Patronus </span>
            </div>
            <div className='patronusContainer'>
              <PatronusModal />
              </div>
          </div>
          <div className='leftComponentContainers leftSpacing'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='photoIcon'></i>
              <span> Hogwarts Students</span>
            </div>
            <div id='photos'>
              <div className='tb'>
                <div className='tr'>
                  <div className='td'></div>
                  <div className='td'></div>
                  <div className='td'></div>
                </div>
                <div className='tr'>
                  <div className='td'></div>
                  <div className='td'></div>
                  <div className='td'></div>
                </div>
                <div className='tr'>
                  <div className='td'></div>
                  <div className='td'></div>
                  <div className='td'></div>
                </div>
              </div>
            </div>
          </div>
          <div id='trevorBox'>
            <a href='https://give.thetrevorproject.org/give/63307/#!/donation/checkout?c_src=pride2020&c_src2=headerdonatebutton'>
              Give To The Trevor Project -{' '}
            </a>
            <a href='https://www.thetrevorproject.org/get-involved/volunteer/'>
              Volunteer for Trevor{' '}
            </a>
            <a href='https://www.pride.com/trans/2020/3/31/6-resources-every-trans-person-and-ally-should-know-about'>
              Resources -{' '}
            </a>
            <a href='https://www.straightforequality.org/transresources'>
              Ally Resources -{' '}
            </a>
            <a href='https://www.hrc.org/'>Human Rights Campaign</a>
            <div id='copyright'>GitSirius &copy;</div>
          </div>
        </div>
        <div className='td' id='middleColumn'>
          <div className='m-mrg' id='profileNav'>
            <div className='tb'>
              <div className='td'>
                <div className='tb' id='profileNavText'>
                  <div className='td active'>
                    <div className='spacer'>
                      <ChatBubble
                        className='material-icons'
                        style={{ color: 'black' }}
                      />
                    </div>
                    <span>CHAT</span>
                  </div>
                  <div className='td'>
                    <Link to='/gitSorted'>
                      <div className='spacer'>
                        <House
                          className='material-icons'
                          style={{ color: 'grey' }}
                        />
                      </div>
                      <span className='textDec'>GITSORTED</span>
                    </Link>
                  </div>
                  <div className='td'>
                    <Link to='/gringotts'>
                      <div className='spacer'>
                        <MonetizationOn
                          className='material-icons'
                          style={{ color: 'grey' }}
                        />
                      </div>
                      <span className='textDec'>GRINGOTTS</span>
                    </Link>
                  </div>
                  <div className='td'>
                    <a
                      href='https://stupefied-pasteur-d48e4c.netlify.app/'
                      rel='noopener noreferrer'
                      target='_blank'
                      onClick={clickHandler}
                    >
                      <div className='spacer'>
                        <FlashOn
                          className='material-icons'
                          style={{ color: 'grey' }}
                        />
                      </div>
                      <span className='textDec'>CLASSES</span>
                    </a>
                  </div>
                  <div className='td'>

                  <Link to='/diagonAlley'>
                  <div id="da" className="spacer">
                  <Redeem
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  </div>
                    <span className="textDec">DIAGON ALLEY</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='m-mrg' id='writeChatBox'>
            <div id='chatContentMain'>
              <div className='tb'>
                <div className='td' id='userPhotoIcon'>
                  <img id='chatPic' src={user.picture} alt={user.name} />
                </div>

                <div className='td' id='chatInputBox'>
                  <Chatroom currentUser={currentUser} />
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
