import {
  initialState,
  tagReducer,
} from '../tagReduser';
import * as tag from '../tagActions';

describe('tagReducer', () => {
  test('Should handle TOGGLE_TAG_FETCH action', () => {
    const result = tagReducer(initialState, tag.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle ADD_TAG action', () => {
    const tagData = {title: 'TEST_TAG_TITLE'};
    const result = tagReducer(initialState, tag.addTag(tagData));
    expect(result).toEqual({
      ...initialState,
      tags: [tagData],
    });
  });

  test('Should handle FILL_TAG_ARRAY action', () => {
    const tags = [{title: 'TEST_TAG_TITLE'}];
    const result = tagReducer(initialState, tag.fillTagsArray(tags));
    expect(result).toEqual({
      ...initialState,
      tags,
    });
  });

  test('Should handle REMOVE_TAG action', () => {
    const id = 1;
    const state = {
      ...initialState,
      tags: [{id: 1}],
    };
    const result = tagReducer(state, tag.removeTag(id));
    expect(result).toEqual(initialState);
  });
});
