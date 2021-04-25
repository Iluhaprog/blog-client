import * as uuid from 'uuid';
import {
  initState,
  bookmarkReducer,
} from '../bookmarkReducer';
import * as bookmark from '../bookmarkActions';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('bookmarkReducer', () => {
  const bmId = 'TEST_BOOKMARK_ID';

  beforeEach(() => {
    uuid.v4.mockImplementationOnce(() => bmId);
  });

  test('Should handle VIEW action', () => {
    const state = {
      ...initState,
      unviewedBookmarksNumber: 10,
    }
    const result = bookmarkReducer(state, bookmark.view());
    expect(result).toEqual(initState);
  });

  test('Should handle SET_VIEW action', () => {
    const isView = true;
    const result = bookmarkReducer(initState, bookmark.setView(isView));
    expect(result).toEqual({
      ...initState,
      isView,
    });
  });

  test('Should handle ADD_BOOKMARK action', () => {
    const bookmarkData = { data: 'string' };
    const result = bookmarkReducer(initState, bookmark.addBookmark(bookmarkData));
    expect(result).toEqual({
      ...initState,
      bookmarks: [{
        id: bmId,
        data: {...bookmarkData},
      }],
    });
  });

  test('Should handle REMOVE_BOOKMARK action', () => {
    const state = {
      ...initState,
      bookmarks: [
        {
          id: bmId,
          data: {},
        },
      ],
    };
    const result = bookmarkReducer(state, bookmark.removeBookmark(bmId));
    expect(result).toEqual(initState);
  });

});

