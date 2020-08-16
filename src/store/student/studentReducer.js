const initState = {
  allStudent: [],
  currentUser: {},
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USERS':
      state.allStudent = payload;
      console.log('inside student reducer.js', payload);
      return state.allStudent;
    case 'ADD_USER':
      return payload;
    case 'GET_THE_USER':
      state.currentUser = payload;
      console.log('inside studentReducer.js currentUser', payload);
      return state.currentUser
    default:
      break;
  }

  return state;
};

export default reducer;
