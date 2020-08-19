import React from 'react';
import LoginButton from './components/loginButton.js';
import {useAuth0} from '@auth0/auth0-react';
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
      <Route path='/gringotts' component={Gringotts} />
      {/* <Route path='/diagonAlley' component={DiagonAlley} /> */}
      </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;