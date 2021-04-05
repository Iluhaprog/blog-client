import {
  initialState,
  windowReducer,
} from '../windowReducer';
import * as win from '../windowActions';
import * as uuid from 'uuid';

describe('windowReducer', () => {
  test('Should handle ADD_WINDOW action', () => {
    const windowData = {id: uuid.v4(), content: {}};
    const result = windowReducer(initialState, win.addWindow(windowData));
    expect(result).toEqual({
      ...initialState,
      windowList: [windowData],
    });
  });

  test('Should handle REMOVE_WINDOW action', () => {
    const windowData = {id: uuid.v4(), content: {}};
    const state = {
      windowList: [windowData],
    };
    const result = windowReducer(state, win.removeWindow(windowData.id));
    expect(result).toEqual(initialState);
  });

  test('Should handle UPDATE_WINDOW action', () => {
    const windowData = {id: uuid.v4(), content: {}};
    const content = {c: 1, d: 2};
    const state = {
      windowList: [windowData],
    };
    const result = windowReducer(state, win.updateWindow(
      windowData.id,
      content,
    ));
    expect(result).toEqual({
      windowList: [{...windowData, content}],
    });
  });
});
