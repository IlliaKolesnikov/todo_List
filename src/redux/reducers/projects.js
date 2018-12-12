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
      return { ...state, isFetching: false, activeProject: action.payload };
    case 'LOAD_TASKS_FAILED':
      return { ...state, isFetching: false, error: action.payload };
    case 'ADD_TASK':
      const array = state.activeProject.tasks.slice();
      array.push(action.payload);
      return { ...state, activeProject: { ...state.activeProject, tasks: array } };
    case 'UPDATE_TASK':
      const updateTaskArray = state.activeProject.tasks.slice();
      let ind = updateTaskArray.findIndex((item) => {
        if (item.id === action.taskId) return item 
      });
      updateTaskArray[ind] = action.payload;
      return { ...state, activeProject: { ...state.activeProject, tasks: updateTaskArray } };
      
    case 'DELETE_TASK':
      const taskArray = state.activeProject.tasks.slice();
      taskArray.findIndex((item, index) => {
        if (item.id === action.taskId) taskArray.splice(index, 1);
      });
      return { ...state, activeProject: { ...state.activeProject, tasks: taskArray } };
    default:
      return state;
  }
}

export default projects;
