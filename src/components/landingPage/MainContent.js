import React from 'react';
import Chatroom from '../chatRoom';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
House,
LocationOn,
MonetizationOn,
FlashOn,
Redeem,
People,
AvTimer,
Search,
Notifications,
PersonAdd,
CameraAlt,
ChatBubble,
Subject,
Pets

} from '@material-ui/icons';

function MainContent(props) {
  const { currentUser } = props;
  const { user } = useAuth0();
  return (
    <div id='mainContent'>
      <div className='tb'>
        <div className='td' id='leftColumn'>
          <div className='leftComponentContainers'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='introIcon'></i>
              <span>Location</span>
              <div className='leftSideActionIcon'>
                
              </div>
            </div>
            <div id='introBox'>
              <div id='introLine'>Hogwarts</div>

              <div id='userLocation'>
              <LocationOn
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                <a href='https://bit.ly/3aAJhgy'>
                54.939196,-3.929788
                </a>
              </div>
            </div>
          </div>
          <div className='leftComponentContainers leftSpacing'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='photoIcon'></i>
              <span>Hogwarts Students</span>
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
          <div className='leftComponentContainers leftSpacing'>
            {/* <div className='leftSideHeaders'>
              <i className='leftColIcons' id='photoIcon'></i>
              <span>
                Did You Know<i id='k-nm'>1</i>
              </span>
            </div> */}
            {/* <div> */}
              {/* <div className='quizContainer'>
                <a href='https://www.google.com/' className='quizAction'>
                  <img
                    src='https://infinitemediaresources.com/wp-content/uploads/2016/08/question-mark-small.png'
                    alt=''
                  />
                  <span>My favorite className at Hogwarts is...</span>
                </a>
              </div> */}
              {/* <div className='quizContainer'>
                <a
                  href='https://www.google.com/'
                  className='quizAction'
                  id='addToQuiz'
                >
                  <i className='material-icons'>add</i>
                  <span>Add Answer</span>
                </a>
              </div> */}
            {/* </div> */}
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
                  <div className="spacer">
                    <ChatBubble
                    className='material-icons'
                    style={{ color: 'black' }}
                  />
                  </div>
                    <span>CHAT</span> 
                  </div>
                  <div className='td'>
                  <Link to='/gitSorted' target='_blank'>
                    <div className="spacer">
                  <House
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  </div>
                    <span  className="textDec">GITSORTED</span>
                    </Link>
                  </div>
                  <div className='td'>
                    <Link to='/gringotts' target='_blank'>
                  <div className="spacer">

                  <MonetizationOn
                    className='material-icons'
                    style={{ color: 'grey' }}
                  /></div>
                    <span className="textDec">GRINGOTTS</span>
                    </Link>
                  </div>
                  <div className='td'>
                  <a href="https://stupefied-pasteur-d48e4c.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <div className="spacer">
                  <FlashOn
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  </div>
                    <span className="textDec">CLASSES</span>
                  </a>
                  </div>
                  <div className='td'>
                  <div id="da" className="spacer">
                  <Redeem
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  </div>
                    <span className="textDec">DIAGON ALLEY</span>
                  </div>
                </div>
              </div>
              {/* <div className='td' id='profileIcon'> */}
                {/* <i className='material-icons'>keyboard_arrow_down</i> */}
              {/* </div> */}
            </div>
          </div>
          <div className='m-mrg' id='writeChatBox'>
            {/* <div id='chatNav'>
              <div className='tb' id='chatTabs'>
                <div className='td active'>
                  <i className='material-icons'>subject</i>
                  <Subject
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  <span>Write Chat</span>
                </div>
               
                <div className='td'>
                <Redeem
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  <span>Go to Charms Class</span>
                </div>
                <Link to='/gitSorted'>
                <div className='td'>
                <Redeem
                    className='material-icons'
                    style={{ color: 'grey' }}
                  />
                  <span>Go to Patronus</span>
                </div>
                  </Link>
              </div>
            </div> */}
            <div id='chatContentMain'>
              <div className='tb'>
                <div className='td' id='userPhotoIcon'>
                <img id="chatPic" src={user.picture} alt={user.name} />
                  {/* <img
                    src='https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg'
                    alt=''
                  /> */}
                </div>




                <div className='td' id='chatInputBox'>
                  {/* <input type='text' placeholder="What's on your mind?" /> */}

                  <Chatroom currentUser={currentUser} />
                </div>
              </div>
              {/* <div id='insertEmoji'> */}
                {/* <i gut className='material-icons trigger'>
                  insert_emoticon
                </i> */}
              {/* </div> */}
            </div>
          </div>
          <div>
 
            {/* <div className="postedChat">
              <div className="tb">
                <a href="https://www.google.com/" className="td postersPic">
                  <img
                    src="https://qph.fs.quoracdn.net/main-qimg-b4e777abf57bca38f1001fad162675c1.webp"
                    alt="Percy's profile pic"
                  />
                </a>
                <div className="td postersHeader">
                  <div className="posterToUser">
                    <a href="https://www.google.com/">Percy Weasley</a> shared a
                    memory with{" "}
                    <a href="https://www.google.com/">Harry Potter</a>
                  </div>
                  <div className="postDate">
                    <i className="material-icons">calendar_today</i>
                    <span>July 31, 1979</span>
                  </div>
                </div>
                <div className="td posterOptions">
                  <i className="material-icons">keyboard_arrow_down</i>
                </div>
              </div>
              <a href="https://www.google.com/" className="posterContentImage">
                <img
                  src="https://images.ctfassets.net/usf1vwtuqyxm/6PWufiS4qAowYIuIQAAKiI/9d89677140b51c958489b77652e1a6e1/WB_F5_Percy_Weasley_Reporting_Harry_and_Cho_HP5D-6118.jpg?fm=jpg"
                  alt=""
                />
              </a>
              <div>
                <div className="posterActionContainer">
                  <div className="posterActions postLike">
                    <i className="material-icons">thumb_up_alt</i>
                    <span>25</span>
                  </div>
                  <div className="posterActions postComment">
                    <i className="material-icons">comment</i>
                    <span>1</span>
                  </div>
                  <div className="posterActions postShare">
                    <i className="material-icons">reply</i>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div id='refresh'>
            <i className='material-icons'>refresh</i>
          </div> */}
        </div>
        {/* <div className='td' id='rightColumn'>
          <div id='onlineUsers'>
            <div id='contactHeader'>
              <i className='material-icons'>contacts</i>
              <span>Contacts</span>
            </div>
            <div id='contacts'>
              <div className='contactsUserPhotos'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img924/4231/JnFicn.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos active'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img923/332/1abR4H.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img924/4231/JnFicn.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos active'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img923/332/1abR4H.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos active'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img924/4231/JnFicn.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img924/4231/JnFicn.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos'>
                <a href='https://www.google.com/'>
                  <img
                    src='https://imagizer.imageshack.com/img923/332/1abR4H.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='contactsUserPhotos' id='contactSettings'>
                <i className='material-icons'>settings</i>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MainContent;
