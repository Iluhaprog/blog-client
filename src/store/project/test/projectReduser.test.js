import {
  initialState,
  projectReducer,
} from '../projectReducer';
import * as project from '../projectActions';

describe('projectReduser', () => {
  test('Should handle TOGGLE_PROJECT_FETCH action', () => {
    const result = projectReducer(initialState, project.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle ADD_PROJECT action', () => {
    const projectData = {title: 'TEST_PROJECT_TITLE'};
    const result = projectReducer(
        initialState,
        project.addProject(projectData),
    );
    expect(result).toEqual({
      ...initialState,
      projects: [projectData],
    });
  });

  test('Should handle UPDATE_PROJECT action', () => {
    const id = 1;
    const projectData = {id, title: 'TEST_PROJECT_TITLE'};
    const updatedData = {...projectData, title: 'TEST'};
    const state = {
      ...initialState,
      projects: [projectData],
    };
    const result = projectReducer(state, project.updateProject(updatedData),
    );
    expect(result).toEqual({
      ...initialState,
      projects: [updatedData],
    });
  });

  test('Should handle FILL_PROJECTS_ARRAY action', () => {
    const id = 1;
    const projectData = {id, title: 'TEST_PROJECT_TITLE'};
    const result = projectReducer(
        initialState,
        project.fillProjectsArray([projectData]),
    );
    expect(result).toEqual({
      ...initialState,
      projects: [projectData],
    });
  });

  test('Should handle REMOVE_PROJECT action', () => {
    const id = 1;
    const projectData = {id, title: 'TEST_PROJECT_TITLE'};
    const state = {
      ...initialState,
      projects: [projectData],
    };
    const result = projectReducer(state, project.removeProject(id));
    expect(result).toEqual(initialState);
  });
});
