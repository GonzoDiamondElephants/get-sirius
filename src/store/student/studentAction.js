import axios from 'axios';

export const getUser = () => async (dispatch) => {
  let result = await axios.get('/student');
  dispatch(getAllUsers(result.data));

  const getAllUsers = (payload) => {
    return {
      type: 'GET_USERS',
      payload,
    };
  };
};

export const addUsers = (payload) => {
  return {
    type: 'ADD_USER',
    payload,
  };
};
