import React from 'react';
import LoginButton from './components/loginButton.js';
import LogoutButton from './components/logoutButton.js';
 import UsersHistory from './components/useHistory.js';
// import TestBackEnd from './components/testBackEnd.js';
// import ChatRoom from './components/chatRoom'
import {useAuth0} from '@auth0/auth0-react';
import store from '../src/store/index.js';
import {Provider} from 'react-redux';

// import Student from './components/student.js';
import HomePage from './components/HomePage.js';
import "./styles/header.scss";
import "./styles/bio.scss";
import "./styles/mainContent.scss";



function App() {
  // const {isLoading} = useAuth0();
  // if(isLoading) return(<div>Loading.......</div>)

  return (
    <>
    <Provider store={store}>
      <h1>Home Page</h1>
      <LoginButton />
      <LogoutButton />
       {/* <Student/> */}
      <UsersHistory/>
      {/* <TestBackEnd/>
      <ChatRoom /> */}
      <HomePage />  
      </Provider>
    </>
  );
}
export default App;