import projectReducer from '../ProjectReducer';
import { selectProjectById, clearSelectedProject } from '../../actoins/project';
import { addProjects, addProject, clearProjects } from '../../actoins/project';
import { updateProject, deleteProjectById } from '../../actoins/project';

const initProjectState = {
    selected: {
        title: '',
        description: '',
        preview: '',
        projectLink: '',
        githubLink: '',
    },
    array: [],
};

describe('Test project reducer', () => {
    test('Should return init state', () => {
        expect(projectReducer(undefined, {})).toEqual(initProjectState);
    });

    test('Should handle SELECT_PROJECT action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const initState = {
            ...initProjectState,
            array: [project]
        };
        expect(projectReducer(initState, selectProjectById(1))).toEqual({
            selected: {...project},
            array: [project],
        });
    });

    test('Should handle CLEAR_SELECTED_PROJECT action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const initState = {
            ...initProjectState,
            selected: {...project},
        };
        expect(projectReducer(initState, clearSelectedProject())).toEqual({
            ...initProjectState,
        });
    });

    test('Should handle ADD_PROJECTS action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const initState = {
            ...initProjectState,
        };
        expect(projectReducer(initState, addProjects([project]))).toEqual({
            ...initProjectState,
            array: [project],
        });
    });

    test('Should handle ADD_PROJECT action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const initState = {
            ...initProjectState,
        };
        expect(projectReducer(initState, addProject(project))).toEqual({
            ...initProjectState,
            array: [project],
        });
    });

    test('Should handle CLEAR_PROJECTS action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const initState = {
            ...initProjectState,
            array: [project],
        };
        expect(projectReducer(initState, clearProjects())).toEqual({
            ...initProjectState,
        });
    });

    test('Should handle UPDATE_PROJECT action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const updatedProject = { ...project, title: 'Updated test project'};
        const initState = {
            selected: project,
            array: [project],
        };
        expect(projectReducer(initState, updateProject(updatedProject))).toEqual({
            selected: updatedProject,
            array: [updatedProject],
        });
    });

    test('Should handle DELETE_PROJECT_FROM_ARRAY action', () => {
        const project = {...initProjectState, id: 1, title: 'Test project'};
        const initState = {
            ...initProjectState,
            array: [project],
        };
        expect(projectReducer(initState, deleteProjectById(1))).toEqual({
            ...initProjectState,
        });
    });
});
