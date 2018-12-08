const initialState = {
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
  ],
  projects: null,
  isLoading: true,
  error: null,
};


function projects(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PROJECTS_BEGIN':
      return { ...state };
    case 'LOAD_PROJECTS_SUCCESS':
      console.log(action.payload);
      return { ...state, isLoading: false, projects: action.payload };
    case 'LOAD_PROJECTS_FAILED':
      return { ...state, isLoading: false, error: action.payload };
    case 'ADD_PROJECT':
      const arr = state.projects.slice();
      arr.push(action.payload);
      return { ...state, projects: arr };
    default:
      return state;
  }
}

export default projects;
