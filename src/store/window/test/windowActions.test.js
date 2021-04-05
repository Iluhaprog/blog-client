import configureStore from 'redux-mock-store';
import * as uuid from 'uuid';
import * as win from '../windowActions';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const mockStore = configureStore();

describe('windowActions', () => {
  const messageId = 'TEST_MESSAGE_ID';

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => messageId);
  });

  test('Should create ADD_WINDOW action', () => {
    const windowData = {id: uuid.v4(), content: {}};
    const expectedActions = [{type: win.ADD_WINDOW, windowData}]
    const store = mockStore();
    store.dispatch(win.addWindow(windowData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_WINDOW action', () => {
    const id = 1;
    const expectedActions = [{type: win.REMOVE_WINDOW, id}]
    const store = mockStore();
    store.dispatch(win.removeWindow(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_WINDOW action', () => {
    const id = uuid.v4();
    const content = {id, content: {}};
    const expectedActions = [{type: win.UPDATE_WINDOW, id, content}]
    const store = mockStore();
    store.dispatch(win.updateWindow(id, content));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
