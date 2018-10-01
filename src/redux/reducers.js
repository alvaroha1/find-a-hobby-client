const initalState = {
  hobbies: [],
  userId: '',
  hobbyId: ''
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
  case 'DISCOVER_SUCCESS':
    return {
      ...state,
      hobbies: action.data
    };

  case 'LIKE_SUCCESS':
    return {
      ...state,
      hobbies: state.hobbies.filter(hobby => hobby._id !== action.data.hobbyId),
      userId: action.data.userId,
      hobbyId: action.data.hobbyId
    };

  case 'DISLIKE_SUCCESS':
    return {
      ...state,
      hobbies: state.hobbies.filter(hobby => hobby._id !== action.data.hobbyId),
      userId: action.data.userId,
      hobbyId: action.data.hobbyId
    };

  default:
    return state;
  }
};

export default reducer;
