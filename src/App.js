import React from 'react';
import LoginButton from './components/loginButton.js';
// import LogoutButton from './components/logoutButton.js';
//  import UsersHistory from './components/useHistory.js';
// import TestBackEnd from './components/testBackEnd.js';
// import ChatRoom from './components/chatRoom'
import {useAuth0} from '@auth0/auth0-react';
import store from '../src/store/index.js';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Potions from "./components/Potions.js"
import GitSorted from "./components/gitSorted.js"


// import Student from './components/student.js';
import HomePage from './components/HomePage.js';
import "./styles/header.scss";
import "./styles/bio.scss";
import "./styles/mainContent.scss";
import "./styles/loginPage.scss";
import "./styles/classroom.scss";


function App() {
  // const {isLoading} = useAuth0();
  // if(isLoading) return(<div>Loading.......</div>)

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Route exact path='/'>
      <LoginButton />
      <HomePage />      
      </Route>


      {/* <Route path='/hogwarts' component={HomePage} /> */}

      <Route path='/gitSorted' component={GitSorted} />
      {/* <Route path='/gringotts' component={Gringotts} /> */}
      {/* <Route path='/presentation' component={Presentation} /> */}
      {/* <Route path='/diagonAlley' component={DiagonAlley} /> */}
      {/* <Route path='/gitToClass' component={Potions} /> */}
      {/* <Route path='/logout' component={LogoutButton} /> */}

      {/* <h1>Home Page</h1> */}

      {/* <LogoutButton /> */}
       {/* <Student/> */}
      {/* <UsersHistory/> */}
      {/* <TestBackEnd/>
      <ChatRoom /> */}

      </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;