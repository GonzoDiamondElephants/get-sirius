import React, {setState, useState} from 'react';
import LoginButton from './components/loginButton.js';
import Axios from 'axios';
import store from '../src/store/index.js';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


// import Presentation from "./components/Presentation.js"
import GitSorted from "./components/gitSorted.js"
import HomePage from './components/HomePage.js';
import Gringotts from './components/gringotts.js';


import "./styles/header.scss";
import "./styles/bio.scss";
import "./styles/mainContent.scss";
// import "./styles/loginPage.scss";
import "./styles/chatStyles.scss";
import "./styles/gitSorted.scss";
import "./styles/gringotts.scss";

export const Context = React.createContext({currentUser: null, setCurrentUser: () => {}})

function App() {

  const [currentUser, setCurrentUser] = useState({});
  // console.log('current User in app.js', currentUser)

  // const checker = async (user) => {
  //   if(user){
  //     let currentStudent = await Axios.get(
  //       `${process.env.REACT_APP_API}/student/sub/${user.sub}`
  //     );
  //     if (currentStudent.data.length > 0) {
  //       setCurrentUser(currentStudent.data[0]);
  //     } else if (currentStudent.data.length === 0) {
  //       let postUser = await Axios.post(
  //         `${process.env.REACT_APP_API}/student`,
  //         user
  //       );
  //       setCurrentUser(postUser.data);
  //     }
  //   }
  // };


  return (
    <>
      <Provider store={store}>
      <Context.Provider value={{currentUser, setCurrentUser}}>
        <BrowserRouter>
          <Route exact path='/'>
            <LoginButton />
            <HomePage />      
          </Route>

      {/* <Route exact path='/gitSorted'>
        <GitSorted currentUser={currentUser}/>
      </Route> */}
          <Route path='/gitSorted' component={GitSorted} />
          <Route path='/gringotts' component={Gringotts} />
      {/* <Route path='/diagonAlley' component={DiagonAlley} /> */}
        </BrowserRouter>
      </Context.Provider>
      </Provider>
    </>
  );
}
export default App;