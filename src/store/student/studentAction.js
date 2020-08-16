import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

export const getUser = () => async (dispatch) => {
  let result = await axios.get('/api/vi/student');
  console.log('result', result.data);

  const getAllUsers = (payload) => {
    return {
      type: 'GET_USERS',
      payload,
    };
  };
  dispatch(getAllUsers(result.data));
};

export const getCurrentUser = () => 
async (dispatch) => {

  // console.log('user in studentActions.js', user)
  
  
  let result = await axios.get('/api/vi/student').data;

  const {user} = useAuth0();
  console.log('user inside of studentActions.js', user)
  
  console.log('result from getCurrentUser in studentAction.js', result);
    const {sub} = user;
    let currentUser;
    for(let i in result){
      if (i.sub === sub){
        currentUser = i;
        console.log('got the current user in studentActions.js', currentUser)
        break
      }
      continue;
    }
  
    console.log('outside of the for loop in studentActions.js: CURRENT USER', currentUser);
    const theCurrentUser = (payload) => {
      return {
        type: 'GET_THE_USER',
        payload,
      };
    }

    dispatch(theCurrentUser(currentUser));
}

export const addUsers = (payload) => {
  return {
    type: 'ADD_USER',
    payload,
  };
};
