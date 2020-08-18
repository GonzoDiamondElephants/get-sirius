import React from 'react';
import Chatroom from '../chatRoom';

function MainContent(props) {
  const { currentUser } = props;
  return (
    <div id='mainContent'>
      <div className='tb'>
        <div className='td' id='leftColumn'>
          <div className='leftComponentContainers'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='introIcon'></i>
              <span>Intro</span>
              <div className='leftSideActionIcon'>
                <i className='material-icons'>edit</i>
              </div>
            </div>
            <div id='introBox'>
              <div id='introLine'>The OG boy who survived.</div>

              <div id='userLocation'>
                <i className='material-icons'>location_on</i>
                <a href='https://www.google.com/maps/place/4+Privet+Drive/@51.6911762,-0.4191844,17z/data=!3m1!4b1!4m5!3m4!1s0x4876402fabd5cc11:0xf1355f57a03a3cba!8m2!3d51.6911762!4d-0.4169957'>
                  4 Privet Drive, Surrey, EN
                </a>
              </div>
            </div>
          </div>
          <div className='leftComponentContainers leftSpacing'>
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='photoIcon'></i>
              <span>Friends</span>
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
            <div className='leftSideHeaders'>
              <i className='leftColIcons' id='photoIcon'></i>
              <span>
                Did You Know<i id='k-nm'>1</i>
              </span>
            </div>
            <div>
              <div className='quizContainer'>
                <a href='https://www.google.com/' className='quizAction'>
                  <img
                    src='https://infinitemediaresources.com/wp-content/uploads/2016/08/question-mark-small.png'
                    alt=''
                  />
                  <span>My favorite className at Hogwarts is...</span>
                </a>
              </div>
              <div className='quizContainer'>
                <a
                  href='https://www.google.com/'
                  className='quizAction'
                  id='addToQuiz'
                >
                  <i className='material-icons'>add</i>
                  <span>Add Answer</span>
                </a>
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
            <div id='copyright'>Fakebook &copy;</div>
          </div>
        </div>
        <div className='td' id='middleColumn'>
          <div className='m-mrg' id='profileNav'>
            <div className='tb'>
              <div className='td'>
                <div className='tb' id='profileNavText'>
                  <div className='td active'>
                    <i className='material-icons'>av_timer</i>
                    <span>HAPPENING</span>
                  </div>
                  <div className='td'>
                    <i className='material-icons'>people</i>
                    <span>FRIENDS</span>
                  </div>
                  <div className='td'>
                    <i className='material-icons'>redeem</i>
                    <span>HOGSMEDE</span>
                  </div>
                  <div className='td'>
                    <i className='material-icons'>flash_on</i>
                    <span>CLASSES</span>
                  </div>
                  <div className='td'>
                    <i className='material-icons'>attach_money</i>
                    <span>GRINGOTS</span>
                  </div>
                </div>
              </div>
              <div className='td' id='profileIcon'>
                <i className='material-icons'>keyboard_arrow_down</i>
              </div>
            </div>
          </div>
          <div className='m-mrg' id='writeChatBox'>
            <div id='chatNav'>
              <div className='tb' id='chatTabs'>
                <div className='td active'>
                  <i className='material-icons'>subject</i>
                  <span>Write Chat</span>
                </div>
                <div className='td'>
                  <i className='material-icons'>camera_enhance</i>
                  <span>Photo</span>
                </div>
                <div className='td'>
                  <i className='material-icons'>videocam</i>
                  <span>Live Video</span>
                </div>
                <div className='td'>
                  <i className='material-icons'>event</i>
                  <span>Life Event</span>
                </div>
              </div>
            </div>
            <div id='chatContentMain'>
              <div className='tb'>
                <div className='td' id='userPhotoIcon'>
                  <img
                    src='https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg'
                    alt=''
                  />
                </div>
                <div className='td' id='chatInputBox'>
                  <input type='text' placeholder="What's on your mind?" />
                </div>
              </div>
              <div id='insertEmoji'>
                <i gut className='material-icons trigger'>
                  insert_emoticon
                </i>
              </div>
            </div>
          </div>
          <div>
            <Chatroom />
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
          <div id='refresh'>
            <i className='material-icons'>refresh</i>
          </div>
        </div>
        <div className='td' id='rightColumn'>
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
        </div>
      </div>
    </div>
  );
}

export default MainContent;
