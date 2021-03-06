import axios from 'axios';

export const getUser = () => async (dispatch) => {
  let result = await axios.get(`${process.env.REACT_APP_API}/api/vi/student`);

  const getAllUsers = (payload) => {
    return {
      type: 'GET_USERS',
      payload,
    };
  };
  dispatch(getAllUsers(result.data));
};

export const addUsers = (payload) => {
  return {
    type: 'ADD_USER',
    payload,
  };
};
