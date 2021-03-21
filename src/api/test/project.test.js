import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import * as project from '../project';
import {HttpStatus} from '../status';

describe('Project api module', () => {
  const mock = new MockAdapter(api);
  const token = 'TEST_TOKEN';

  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(token);
  });

  test('/project (GET)', async () => {
    const projectData = {title: 'TEST_PROJECT_TITLE'};
    mock.onGet('/project').reply(HttpStatus.OK, [projectData]);

    const {status, data} = await project.getAll();

    expect(status).toBe(HttpStatus.OK);
    expect(data).toEqual([projectData]);
  });

  test('/project (POST)', async () => {
    const newProject = {title: 'TEST_PROJECT_TITLE'};
    const projectResult = {id: 1, ...newProject};
    mock.onPost('/project').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(newProject));
      return [HttpStatus.CREATED, projectResult];
    });

    const {status, data} = await project.create(newProject);

    expect(data).toEqual(projectResult);
    expect(status).toBe(HttpStatus.CREATED);
  });

  test('/project (PUT)', async () => {
    const updatedProject = {title: 'TEST_PROJECT_TITLE'};
    mock.onPut('/project').reply((config) => {
      const {headers, data} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(data).toBe(JSON.stringify(updatedProject));
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await project.update(updatedProject);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });

  test('/project (DELETE)', async () => {
    const id = 1;
    mock.onDelete('/project').reply((config) => {
      const {headers, params} = config;
      expect(headers['Authorization']).toBe(`Bearer ${token}`);
      expect(params.id).toBe(id);
      return [HttpStatus.NO_CONTENT];
    });

    const {status} = await project.remove(id);

    expect(status).toBe(HttpStatus.NO_CONTENT);
  });
});
