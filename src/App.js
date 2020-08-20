import React, {setState, useState} from 'react';
import LoginButton from './components/loginButton.js';
import Axios from 'axios';
import store from '../src/store/index.js';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import GitSorted from "./components/gitSorted.js"
import HomePage from './components/HomePage.js';
import Gringotts from './components/gringotts.js';
import DiagonAlley from './components/diagonAlley.js';

import "./styles/header.scss";
import "./styles/bio.scss";
import "./styles/mainContent.scss";
import "./styles/chatStyles.scss";
import "./styles/gitSorted.scss";
import "./styles/gringotts.scss";

export const Context = React.createContext({currentUser: null, setCurrentUser: () => {}})

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <>
      <Provider store={store}>
      <Context.Provider value={{currentUser, setCurrentUser}}>
        <BrowserRouter>
          <Route exact path='/'>
            <LoginButton />
            <HomePage />      
          </Route>
          <Route path='/gitSorted' component={GitSorted} />
          <Route path='/gringotts' component={Gringotts} />
      <Route path='/diagonAlley' component={DiagonAlley} />
        </BrowserRouter>
      </Context.Provider>
      </Provider>
    </>
  );
}
export default App;