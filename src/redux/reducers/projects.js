const initialState = {
  projects: null,
  isLoading: true,
  isFetching: true,
  error: null,
  activeProject: null,
};


function projects(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PROJECTS_BEGIN':
      return { ...state };
    case 'LOAD_PROJECTS_SUCCESS':
      // console.log(action.payload);
      return { ...state, isLoading: false, projects: action.payload };
    case 'LOAD_PROJECTS_FAILED':
      return { ...state, isLoading: false, error: action.payload };
    case 'ADD_PROJECT':
      const arr = state.projects.slice();
      arr.push(action.payload);
      return { ...state, projects: arr };
    case 'LOAD_TASKS_BEGIN':
      return { ...state };
    case 'LOAD_TASKS_SUCCESS':
      // console.log(action.payload);
      return { ...state, isFetching: false, activeProject: action.payload };
    case 'LOAD_TASKS_FAILED':
      return { ...state, isFetching: false, error: action.payload };
    case 'ADD_TASK':
      const array = state.activeProject.tasks.slice();
      array.push(action.payload);

      return { ...state, activeProject: { ...state.activeProject, tasks: array } };
    default:
      return state;
  }
}

export default projects;
