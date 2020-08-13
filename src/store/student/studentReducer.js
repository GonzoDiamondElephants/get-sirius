const initState = {
  allStudent: [],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log('student reducer before switch', action.type);
  switch (type) {
    case 'GET_USERS':
      console.log('inside student reducer.js', payload);
      state.allStudent = payload;

      return state.allStudent;
    case 'ADD_USER':
      return payload;
    default:
      break;
  }

  return state;
};

export default reducer;
