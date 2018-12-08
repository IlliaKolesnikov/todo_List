const initialState = {
  error: null,
  isAuth: false,
  list: [
    {
      name: 'Project #1',
      tasks: [
        { content: 'destroy #1' },
        { content: 'destroy #2' },
        { content: 'destroy #3' },
      ],
    },
    {
      name: 'Project #2',
      tasks: [
        { content: 'create #1' },
        { content: 'create #2' },
        { content: 'create #3' },
      ],
    },
    {
      name: 'Project #3',
      tasks: [
        { content: 'edit #1' },
        { content: 'edit #2' },
        { content: 'edit #3' },
      ],
    },
  ]
};

function sign(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return { ...state, isAuth: true };
    case 'LOG_OUT':
      return { ...state, isAuth: false, error: null };
    case 'ERROR_FOUND':
      return { ...state, error: action.payload };
    case 'MESSAGE_CLOSED':
      return { ...state, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default sign;
