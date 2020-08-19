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

    default:
      break;
  }

  return state;
};

export default reducer;
