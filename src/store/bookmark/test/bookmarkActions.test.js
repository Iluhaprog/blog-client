import configureStore from 'redux-mock-store';
import * as bookmark from '../bookmarkActions';
const mockStore = configureStore();

describe('Bookmark actions', () => {
  test('Should create VIEW action', () => {
    const expectedActions = [{ type: bookmark.VIEW }];
    const store = mockStore({});
    store.dispatch(bookmark.view());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_VIEW action', () => {
    const isView = true;
    const expectedActions = [{ type: bookmark.SET_VIEW, isView }];
    const store = mockStore({});
    store.dispatch(bookmark.setView(isView));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create ADD_BOOKMARK action', () => {
    const data = { test: 'test' };
    const expectedActions = [{ type: bookmark.ADD_BOOKMARK, data }];
    const store = mockStore({});
    store.dispatch(bookmark.addBookmark(data));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create REMOVE_BOOKMARK action', () => {
    const id = 1;
    const expectedActions = [{ type: bookmark.REMOVE_BOOKMARK, id }];
    const store = mockStore({});
    store.dispatch(bookmark.removeBookmark(id));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
