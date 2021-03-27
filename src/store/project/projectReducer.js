import * as project from './projectActions';

export const initialState = {
  projects: [],
  isFetch: false,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case project.TOGGLE_PROJECT_FETCH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case project.ADD_PROJECT:
      return {
        ...state,
        projects: [action.project, ...state.projects],
      };
    case project.UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) => {
          return project.id === action.project.id ? action.project : project;
        }),
      };
    case project.FILL_PROJECTS_ARRAY:
      return {
        ...state,
        projects: [...action.projects],
      };
    case project.REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};
