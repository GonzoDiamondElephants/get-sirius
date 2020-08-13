const initState = {
  allStudent: [],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_USERS':
      return payload;
    case 'ADD_USER':
      return payload;
    default:
      return state;
  }
};

export default reducer;
